import { MAIN_NAV_DATA } from "@/helpers/constant";
import { JSX, useState, useEffect } from "react";
import SelectLang from "./components/SelectLang";
import SelectTheme from "./components/SelectTheme";
import { useTranslation } from "react-i18next";
import { Logo } from "@/helpers/icons";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import MenuResponsive from "./components/MenuResponsive";
import { Link } from "react-router-dom";

const MainNav = (): JSX.Element => {
    const { t } = useTranslation("common");
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const handleToogle = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        setIsAuthenticated(!!token);
    }, []);

    return (
        <>
            <nav className="main-nav absolute top-0 left-0 z-40 w-full overflow-hidden">
                <div className="main-nav__container container flex items-center justify-between px-5 py-8">
                    <div className="logo">
                        <Logo />
                    </div>

                    <ul className="menu-items hidden space-x-8 lg:flex">
                        {MAIN_NAV_DATA.map((item, index) => (
                            <li
                                key={index}
                                className="menu-items__list interactive-list cursor-pointer transition-all duration-150 hover:text-primary"
                            >
                                {t(item.title)}
                            </li>
                        ))}
                    </ul>

                    <MenuIcon
                        className="flex size-8 lg:hidden"
                        onClick={handleToogle}
                    />

                    <div className="actions hidden items-center space-x-5 lg:flex">
                        <SelectTheme />
                        <SelectLang />
                        <Link to={isAuthenticated ? "/guide" : "/login"}>
                            <Button className="ml-6 rounded-full">
                                Commencer
                            </Button>
                        </Link>
                    </div>
                </div>
            </nav>

            <MenuResponsive isOpen={isOpen} />
        </>
    );
};

export default MainNav;
