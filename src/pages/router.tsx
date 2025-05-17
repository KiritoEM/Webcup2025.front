import { createBrowserRouter } from "react-router-dom";
import Home from "./(client)/home/index";
import ClientLayout from "@/components/layouts/ClientLayout";
import Login from "./(client)/Authentification/login";
import Signup from "./(client)/Authentification/signup";
import ClientAuthLayout from "@/components/layouts/ClientAuthLayout";

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
]);

export default router;
