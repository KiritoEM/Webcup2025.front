import React, { FormEvent, useState } from "react";

type ChatInputProps = {
    sendMessage: (message: string) => void;
    disabled: boolean;
};

const ChatInput: React.FC<ChatInputProps> = ({ sendMessage, disabled }) => {
    const [error, setError] = useState<boolean>(false);
    const [prompt, setPrompt] = useState<string>("");

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!prompt.trim()) {
            setError(true);
            return;
        }

        setError(false);
        sendMessage(prompt);
        setPrompt("");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-3">
            <div className="mt-4 flex w-full max-w-2xl items-center justify-between self-center rounded-[20px] bg-black px-4 py-3 text-white">
                <input
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Ce que tu quittes, en un souffle."
                    className="w-full bg-transparent placeholder-gray-300 outline-none"
                />

                <div className="ml-4 flex items-center gap-4">
                    <button
                        className="rounded-lg bg-blue-600 p-2"
                        type="submit"
                        disabled={disabled}
                    >
                        <svg
                            width="16"
                            height="17"
                            viewBox="0 0 16 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M15.5483 1.3816C15.1481 0.970894 14.5559 0.817885 14.0037 0.978947L1.1264 4.72363C0.543759 4.8855 0.13079 5.35017 0.0195441 5.94046C-0.0941024 6.54122 0.30286 7.30385 0.821472 7.62275L4.84792 10.0975C5.26089 10.3511 5.79391 10.2875 6.13565 9.94284L10.7463 5.30346C10.9784 5.06186 11.3626 5.06186 11.5947 5.30346C11.8268 5.537 11.8268 5.91549 11.5947 6.15708L6.97599 10.7973C6.63345 11.1411 6.56943 11.6767 6.82153 12.0922L9.28174 16.159C9.56985 16.6422 10.0661 16.916 10.6103 16.916C10.6743 16.916 10.7463 16.916 10.8104 16.908C11.4346 16.8274 11.9308 16.4006 12.1149 15.7966L15.9325 2.93585C16.1005 2.38824 15.9485 1.79231 15.5483 1.3816Z"
                                fill="white"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            {error && (
                <p className="text-destructive">Veuillze remplir l'input</p>
            )}
        </form>
    );
};

export default ChatInput;
