import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "./(client)/home/index";
import ClientLayout from "@/components/layouts/ClientLayout";
import Studio from "./(client)/studio";
import StudioLayout from "@/components/layouts/StudioLayout";
import List from "./(client)/list";
import Login from "./(client)/Authentification/login";
import Signup from "./(client)/Authentification/signup";
import ClientAuthLayout from "@/components/layouts/ClientAuthLayout";
import Guide from "./(client)/guide";
import Choice from "./(client)/guide/choice";
import Chat from "./(client)/guide/chat";
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
                path: "/list",
                element: <List />,
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
                        element: <Emotions />,
                    },
                    {
                        path: "chat",
                        element: <Chat />,
                    },
                ],
            },
        ],
    },
    {
        element: <ClientAuthLayout />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
        ],
    },
    {
        path: "studio",
        element: <StudioLayout />,
        children: [
            {
                path: "",
                element: <Studio />,
            },
        ],
    },
    {
        path: "*", // Catch-all pour les routes non définies côté client
        element: <Navigate to="/" replace />,
    },
]);

export default router;
