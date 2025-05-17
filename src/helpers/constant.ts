import { Moon, Sun } from "lucide-react";
import { ILanguageOption, INavItem, IThemeOption } from "./types";

export const BACKEND_URL =
    "https://trim0be.madagascar.webcup.hodi.host/theendpage/api/";
export const LANG_KEY = "i18nextLng";
export const THEME_KEY = "theme";

export const MAIN_NAV_DATA: INavItem[] = [
    {
        title: "mainNav.home",
        href: "/",
    },
    {
        title: "mainNav.about",
        href: "/about",
    },
    {
        title: "mainNav.contact",
        href: "/blog",
    },
    {
        title: "mainNav.products",
        href: "/products",
    },
];

export const LANG_OPTIONS: ILanguageOption[] = [
    {
        title: "lang.en",
        icon: "/icons/english-flag.svg",
        value: "en",
    },
    {
        title: "lang.fr",
        icon: "/icons/french-flag.svg",
        value: "fr",
    },
    {
        title: "lang.mg",
        icon: "/icons/malagasy-flag.svg",
        value: "mg",
    },
];

export const THEME_OPTIONS: IThemeOption[] = [
    {
        title: "theme.light",
        icon: Sun,
        value: "light",
    },
    {
        title: "theme.dark",
        icon: Moon,
        value: "dark",
    },
];

export const TEXT_ELEMENTS =
    "p, span, a, h1, h2, h3, h4, h5, h6, url, pre, a, b, i, span, strong, small";

export const INTERACTIVE_ELEMENTS =
    "a, button, input, textarea, select, label, [role='button'], [role='link'], .interactive-list";
