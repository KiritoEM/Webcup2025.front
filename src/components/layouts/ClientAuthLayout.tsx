import { JSX, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PageTransitionAnimation from "../transitions/PageTransitionAnimation";
import { PageTransitionProvider } from "@/Provider.tsx/PageTransitionProvider";

const ClientAuthLayout = (): JSX.Element => {
    const { t } = useTranslation("authentification", { keyPrefix: "layout" });
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const backgroundMap: { [key: string]: string } = {
        "/login": "/login.png",
        "/signup": "/signup.png",
        "/forgot-password": "/forgot.png",
    };

    const defaultBg = "/login.png";
    const currentPath = location.pathname;
    const backgroundImage = backgroundMap[currentPath] || defaultBg;

    return (
        <PageTransitionProvider>
            <div className="client-auth grid h-full min-h-screen grid-cols-1 md:grid-cols-2">
                <div className="client-auth__content relative flex w-full flex-col items-center justify-center text-center">
                    <Link to="/" className="mt-10 ml-10 self-start">
                        <img
                            src="logo.svg"
                            alt="Logo"
                            className="client-auth__logo hidden object-cover dark:block"
                        />
                        <img
                            src="logoD.svg"
                            alt="Logo"
                            className="client-auth__logo block object-cover dark:hidden"
                        />
                    </Link>
                    <div className="side__background my-20">
                        <Outlet />
                    </div>
                    <div className="client-auth__footer flex w-full justify-between p-4 text-center">
                        <p className="text-sm text-gray-500">
                            © 2025 TheEnd.page. {t("rightsReserved")}
                        </p>
                        <p className="text-sm text-gray-500">
                            {t("privacyPolicy")}
                        </p>
                    </div>
                </div>

                <div className="client-auth__side relative hidden h-full min-h-screen items-center justify-center p-4 text-center md:flex">
                    <div
                        className="side__background h-full w-full rounded-lg bg-cover bg-center"
                        style={{ backgroundImage: `url(${backgroundImage})` }}
                    ></div>
                </div>
            </div>
            <PageTransitionAnimation />
        </PageTransitionProvider>
    );
};

export default ClientAuthLayout;
