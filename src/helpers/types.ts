import type { LucideIcon } from "lucide-react";

export type ILang = "en" | "fr" | "mg";

export type Itheme = "light" | "dark";

export type INavItem = {
    title: string;
    href: string;
};

export type ILanguageOption = {
    title: string;
    icon: string;
    value: ILang;
};

export type IThemeOption = {
    title: string;
    icon: LucideIcon;
    value: Itheme;
};

export type Response<T> = {
    status: "success" | "error";
    message: string;
    data?: T;
};
