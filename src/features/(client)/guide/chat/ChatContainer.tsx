import React from "react";
import ChatContent from "./ChatContent";
import ChatInput from "./ChatInput";

const ChatContainer: React.FC = () => {
    return (
        <div className="mx-auto flex w-full max-w-xl flex-col justify-between p-4">
            <div className="hide-scrollbar mt-5 max-h-[calc(100vh-200px)] space-y-4 overflow-scroll">
                <ChatContent message="usreefdsfjds  fdsfs hjs" isUser={false} />
                <ChatContent message="usreefdsfjds  fdsfs hjs" isUser={true} />
            </div>
            <ChatInput />
        </div>
    );
};

export default ChatContainer;
