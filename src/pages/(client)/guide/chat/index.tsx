import { JSX } from "react";
import robot from "@/assets/robot.png";
import ChatContainer from "@/features/(client)/guide/chat/ChatContainer";

const Chat = (): JSX.Element => {
    return (
        <section className="flex h-full w-full flex-col p-4">
            <div className="mx-auto flex max-w-lg flex-col items-center justify-between">
                <img src={robot} alt="robot" className="h-24 w-24" />
                <h1 className="text-dark mt-5 max-w-sm text-center text-5xl font-bold dark:text-white">
                    Salut, je suis Lumen
                </h1>
            </div>
            <ChatContainer />
        </section>
    );
};

export default Chat;
