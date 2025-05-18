import type { LucideIcon } from "lucide-react";

export type ILang = "en" | "fr";

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

export type Emotion = {
    emoji: string;
    labelFr: string;
    constant: string;
    labelEn: string;
};
