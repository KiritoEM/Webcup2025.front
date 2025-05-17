import { createBrowserRouter } from "react-router-dom";
import Home from "./(client)/home/index";
import ClientLayout from "@/components/layouts/ClientLayout";
import Guide from "./(client)/guide";
import Emotions from "./(client)/guide/emotions";

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
                        element: <div className="text-white">Guide</div>,
                    },
                    {
                        path: "emotions",
                        element: <Emotions />,
                    },
                    {
                        path: "chat",
                        element: <div>chat</div>,
                    },
                ],
            },
        ],
    },
]);

export default router;
