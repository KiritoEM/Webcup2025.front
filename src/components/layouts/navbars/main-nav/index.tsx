import { MAIN_NAV_DATA } from "@/helpers/constant";
import { JSX } from "react";
import SelectLang from "./components/SelectLang";
import SelectTheme from "./components/SelectTheme";
import { useTranslation } from "react-i18next";

const MainNav = (): JSX.Element => {
    const { t } = useTranslation("common");

    return (
        <nav className="main-nav absolute top-0 left-0 z-40 w-full overflow-hidden">
            <div className="main-nav__container container flex items-center justify-between px-12 py-8">
                <div className="logo">
                    <h1 className="font-zektonbo text-2xl">Logo.</h1>
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
                    <SelectLang />
                    <SelectTheme />
                </div>
            </div>
        </nav>
    );
};

export default MainNav;
