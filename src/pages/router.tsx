import { createBrowserRouter } from "react-router-dom";
import Home from "./(client)/home/index";
import ClientLayout from "@/components/layouts/ClientLayout";
import Login from "./(client)/login";
import Signup from "./(client)/signup";
import Studio from "./(client)/studio";
import StudioLayout from "@/components/layouts/StudioLayout";
import List from "./(client)/list";

const router = createBrowserRouter([
    {
        element: <ClientLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
                // loader: async () => {
                //     // Simulate a data fetching error
                //     throw new Error("Data fetching error");
                // },
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
            {
                path: "/list",
                element: <List />,
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
]);

export default router;
