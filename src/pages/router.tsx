import { createBrowserRouter } from "react-router-dom";
import Home from "./(client)/home/index";
import ClientLayout from "@/components/layouts/ClientLayout";
import Guide from "./(client)/guide";
import Choice from "./(client)/guide/choice";
import Chat from "./(client)/guide/chat";

const router = createBrowserRouter([
    {
        element: <ClientLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/guide",
                element: <Guide />,
                children: [
                    {
                        path: "",
                        element: <Choice />,
                    },
                    {
                        path: "emotions",
                        element: <div>emotions</div>,
                    },
                    {
                        path: "chat",
                        element: <Chat />,
                    },
                ],
            },
        ],
    },
]);

export default router;
