import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LANG_KEY, LANG_OPTIONS } from "@/helpers/constant";
import { Lang } from "@/helpers/icons";
import { ILang } from "@/helpers/types";
import { cn } from "@/lib/utils";
import { JSX, useState } from "react";
import { useTranslation } from "react-i18next";

const SelectLang = (): JSX.Element => {
    const [selectedLanguage, setSelectedLanguage] = useState<ILang>(() => {
        const storedLang = localStorage.getItem(`${LANG_KEY}`);
        return (storedLang ?? "fr") as ILang;
    });
    const { t, i18n } = useTranslation("common", { keyPrefix: "mainNav" });

    const handeToggleLang = (lang: ILang) => {
        setSelectedLanguage(lang);
        localStorage.setItem(`${LANG_KEY}`, lang);
        i18n.changeLanguage(lang);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="transform cursor-pointer transition-transform duration-200 ease-in-out hover:[&>svg]:scale-110">
                <Lang className="size-6 fill-primary" />
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-[200px] p-3">
                <DropdownMenuLabel className="text-[15px]">
                    {t("lang.label")}
                </DropdownMenuLabel>

                <DropdownMenuGroup className="mt-1 space-y-1">
                    {LANG_OPTIONS.map((lang, index) => (
                        <DropdownMenuItem
                            className={cn(
                                "transition-colors duration-200 ease-in-out hover:bg-gray-100",
                                selectedLanguage === lang.value &&
                                    "pointer-events-none relative border border-primary text-primary",
                            )}
                            key={index}
                            onClick={() => handeToggleLang(lang.value)}
                        >
                            <div className="lang flex items-center space-x-2">
                                <img
                                    src={lang.icon}
                                    className="h-6 w-6 rounded-full object-cover transition-transform duration-200 ease-in-out hover:scale-110"
                                />

                                <span>{t(lang.title)}</span>
                            </div>

                            {selectedLanguage === lang.value && (
                                <div className="absolute right-3 h-2 w-2 rounded-full bg-primary"></div>
                            )}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default SelectLang;
