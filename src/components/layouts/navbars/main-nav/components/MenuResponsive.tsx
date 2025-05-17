import { MAIN_NAV_DATA } from "@/helpers/constant";
import { cn } from "@/lib/utils";
import { FC, JSX } from "react";
import { useTranslation } from "react-i18next";

type MenuProps = {
    isOpen: boolean;
};

const MenuResponsive: FC<MenuProps> = ({ isOpen }): JSX.Element => {
    const { t } = useTranslation("common");
    return (
        <div
            className={cn(
                "menu-responsive fixed z-40 mt-[110px] h-fit w-full px-6",
                isOpen ? "flex lg:hidden" : "hidden",
                "justify-end",
            )}
        >
            <div className="w-full rounded-2xl bg-white p-5 py-10 sm2:max-w-[300px]">
                <ul className="menu-items flex flex-col items-center gap-5 text-center">
                    {MAIN_NAV_DATA.map((item, index) => (
                        <li
                            key={index}
                            className="menu-items__list interactive-list m-0 cursor-pointer p-0 font-dm text-lg font-semibold text-black transition-all duration-150"
                        >
                            {t(item.title)}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MenuResponsive;
