// ChatContent.tsx
import React from "react";

interface ChatContentProps {
    message: string;
    isUser: boolean;
    emotion?: string;
}

const ChatContent: React.FC<ChatContentProps> = ({
    message,
    isUser,
    emotion,
}) => {
    return (
        <div
            className={`flex ${isUser ? "justify-end" : "justify-start"} mb-2 w-full`}
        >
            <div
                className={`${
                    isUser
                        ? "rounded-tr-none bg-blue-600 text-white"
                        : "rounded-tl-none bg-black text-white dark:bg-white dark:text-black"
                } w-fit max-w-[80%] rounded-[28px] p-4 shadow`}
            >
                {emotion && <span className="mr-2">{emotion}</span>}
                <p>{message}</p>
            </div>
        </div>
    );
};

export default ChatContent;
