import { MAIN_NAV_DATA } from "@/helpers/constant";
import { JSX } from "react";
import SelectLang from "./components/SelectLang";
import SelectTheme from "./components/SelectTheme";
import { useTranslation } from "react-i18next";
import { Logo } from "@/helpers/icons";
import { Button } from "@/components/ui/button";

const MainNav = (): JSX.Element => {
    const { t } = useTranslation("common");

    return (
        <nav className="main-nav absolute top-0 left-0 z-40 w-full overflow-hidden">
            <div className="main-nav__container container flex items-center justify-between px-5 py-8">
                <div className="logo">
                    <Logo />
                </div>

                <ul className="menu-items flex space-x-8">
                    {MAIN_NAV_DATA.map((item, index) => (
                        <li
                            key={index}
                            className="menu-items__list interactive-list cursor-pointer transition-all duration-150 hover:text-primary"
                        >
                            {t(item.title)}
                        </li>
                    ))}
                </ul>

                <div className="actions flex items-center space-x-5">
                    <SelectTheme />
                    <SelectLang />

                    <Button className="ml-6 rounded-full">Commencer</Button>
                </div>
            </div>
        </nav>
    );
};

export default MainNav;
