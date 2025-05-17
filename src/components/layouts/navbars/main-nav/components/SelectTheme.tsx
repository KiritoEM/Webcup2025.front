import { animateSideCannons } from "@/components/animations/confeti";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { THEME_OPTIONS } from "@/helpers/constant";
import useTheme from "@/hooks/useTheme";
import { cn } from "@/lib/utils";
import { SunDim } from "lucide-react";
import { JSX } from "react";
import { useTranslation } from "react-i18next";

const SelectTheme = (): JSX.Element => {
    const { t } = useTranslation("common", { keyPrefix: "mainNav" });
    const { toggleTheme, theme: themeContext } = useTheme();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="transform cursor-pointer transition-transform duration-200 ease-in-out hover:[&>svg]:scale-110">
                <SunDim className="size-6 fill-primary" />
            </DropdownMenuTrigger>

            <DropdownMenuContent
                align="end"
                className="w-[200px] border-none p-3 dark:bg-primary"
            >
                <DropdownMenuLabel className="text-[15px] dark:text-primary-foreground">
                    {t("theme.label")}
                </DropdownMenuLabel>

                <DropdownMenuGroup className="mt-1 space-y-1">
                    {THEME_OPTIONS.map((theme, index) => (
                        <DropdownMenuItem
                            key={index}
                            className={cn(
                                "relative dark:focus:bg-white/40",
                                themeContext === theme.value &&
                                    "pointer-events-none border border-primary text-primary dark:border-accent dark:text-accent",
                            )}
                            onClick={() => {
                                toggleTheme(theme.value);
                                animateSideCannons();
                            }}
                        >
                            <div className="theme flex items-center space-x-2 dark:text-primary-foreground">
                                <theme.icon className="dark:text-primary-foreground" />
                                <span>{t(theme.title)}</span>
                            </div>

                            {themeContext === theme.value && (
                                <div className="absolute right-3 h-2 w-2 rounded-full bg-primary dark:bg-accent"></div>
                            )}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default SelectTheme;
