import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./pages/router";
import { ThemeProvider } from "./contexts/ThemeContext.tsx";
import { JSX } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./lib/i18n.ts";
import Cursor from "./components/cursor/index.tsx";
import Loader from "./components/loader/index.tsx";

const App = (): JSX.Element => {
    return (
        <I18nextProvider i18n={i18n}>
            <ThemeProvider>
                <Loader />
                <Cursor />
                <RouterProvider router={router} />
            </ThemeProvider>
        </I18nextProvider>
    );
};

export default App;
