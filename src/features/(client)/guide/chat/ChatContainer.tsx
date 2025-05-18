import React, { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ChatContent from "./ChatContent";
import ChatInput from "./ChatInput";
import { Discuss } from "../services/chatbotService";
import useAuth from "@/hooks/useAuth";
import { EMOTIONS_AVAILABLE } from "@/helpers/constant";

type Emotion = (typeof EMOTIONS_AVAILABLE)[number]["constant"];
type EmotionStep = "neutral" | "detection" | "confirmation" | "integration";

type ChatTypes = {
    message: string;
    role: "bot" | "user";
    emotion?: string;
};

const MAX_CONTEXT_CHARS = 1500;
const MAX_USER_MESSAGES = 4;

const ChatContainer: React.FC = () => {
    const { token } = useAuth();
    const navigate = useNavigate();
    const [messages, setMessages] = useState<ChatTypes[]>([
        {
            role: "bot",
            message:
                "Salut… Qu'est-ce qui se passe ? Raconte-moi en quelques mots, je t'écoute.",
        },
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const [emotionStep, setEmotionStep] = useState<EmotionStep>("neutral");
    const [detectedEmotion, setDetectedEmotion] = useState<Emotion | null>(
        null,
    );
    const [messageCount, setMessageCount] = useState(0);

    useEffect(() => {
        if (messageCount >= MAX_USER_MESSAGES) {
            const emotionParam = detectedEmotion
                ? `emotion=${encodeURIComponent(detectedEmotion)}`
                : "";

            setTimeout(() => {
                navigate(`/studio?${emotionParam}`);
            }, 1200);
        }
    }, [messageCount, detectedEmotion, navigate]);

    const detectEmotion = useMemo(() => {
        const patterns: Record<Emotion, RegExp> = {
            LIBERATING_JOY: /(joyeux|heureux|content)/i,
            SADNESS: /(triste|déprimé|pleurer)/i,
            EXPLOSIVE_ANGER: /(colère|énervé|fâché)/i,
            DISGUST: /(dégoût|dégoutant)/i,
            DETACHED_IRONY: /(ironie|ironique)/i,
            HILARIOUS: /(rire|drôle|hilarant)/i,
            POETIC: /(poét|rêveur)/i,
            EXISTENTIAL_VOID: /(vide|existentiel)/i,
            ACCEPTANCE: /(accepter|ok|d'accord)/i,
            CONFUSED: /(confus|perdu)/i,
        };
        return (text: string): Emotion | null => {
            for (const [key, regex] of Object.entries(patterns) as [
                Emotion,
                RegExp,
            ][]) {
                if (regex.test(text)) return key;
            }
            return null;
        };
    }, []);

    const buildContext = useMemo(() => {
        return () => {
            let base =
                "Tu es un assistant conversationnel spécialisé dans l'intelligence émotionnelle.";
            if (emotionStep === "integration" && detectedEmotion) {
                const { labelFr } = EMOTIONS_AVAILABLE.find(
                    (e) => e.constant === detectedEmotion,
                )!;
                base += ` Adapte ton ton selon "${labelFr}".`;
            } else if (emotionStep === "confirmation" && detectedEmotion) {
                const { labelFr } = EMOTIONS_AVAILABLE.find(
                    (e) => e.constant === detectedEmotion,
                )!;
                base += ` Je détecte peut-être "${labelFr.toLowerCase()}". Confirme-le.`;
            } else if (emotionStep === "detection" && detectedEmotion) {
                const { labelFr } = EMOTIONS_AVAILABLE.find(
                    (e) => e.constant === detectedEmotion,
                )!;
                base += ` Je perçois une émotion "${labelFr}".`;
            }
            if (base.length > MAX_CONTEXT_CHARS) {
                base = base.slice(base.length - MAX_CONTEXT_CHARS);
            }
            return base;
        };
    }, [emotionStep, detectedEmotion]);

    const sendUserMessage = async (message: string) => {
        if (!message.trim() || messageCount >= MAX_USER_MESSAGES) return;

        setMessages((prev) => [...prev, { message, role: "user" }]);
        setMessageCount((cnt) => cnt + 1);

        const newEmotion = detectEmotion(message);
        if (newEmotion) {
            setDetectedEmotion(newEmotion);
            setEmotionStep((prev) => {
                switch (prev) {
                    case "neutral":
                        return "detection";
                    case "detection":
                        return "confirmation";
                    case "confirmation":
                        return "integration";
                    default:
                        return prev;
                }
            });
        }

        setIsLoading(true);
        setMessages((prev) => [
            ...prev,
            { message: "Je réfléchis...", role: "bot" },
        ]);

        try {
            const context = buildContext();
            const response = await Discuss(token, message, context);
            setMessages((prev) => {
                const copy = [...prev];
                const last = copy.length - 1;
                copy[last] = {
                    message: response.response,
                    role: "bot",
                    emotion:
                        emotionStep === "integration" && detectedEmotion
                            ? EMOTIONS_AVAILABLE.find(
                                  (e) => e.constant === detectedEmotion,
                              )!.emoji
                            : undefined,
                };
                return copy;
            });
        } catch {
            setMessages((prev) => {
                const copy = [...prev];
                copy[copy.length - 1] = {
                    message: "Une erreur est survenue.",
                    role: "bot",
                };
                return copy;
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="mx-auto flex w-full max-w-xl flex-col justify-between p-4">
            <div className="hide-scrollbar mt-5 space-y-4 overflow-y-scroll">
                {messages.map((m, i) => (
                    <ChatContent
                        key={i}
                        isUser={m.role === "user"}
                        message={m.message}
                        emotion={m.emotion}
                    />
                ))}
                {isLoading && <ChatContent isUser={false} message="..." />}
            </div>
            <ChatInput
                sendMessage={sendUserMessage}
                disabled={isLoading || messageCount >= MAX_USER_MESSAGES}
            />
        </div>
    );
};

export default ChatContainer;
