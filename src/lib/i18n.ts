import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";
import { LANG_KEY } from "@/helpers/constant";

if (!localStorage.getItem(`${LANG_KEY}`)) {
    localStorage.setItem(`${LANG_KEY}`, "fr");
}

i18n.use(HttpBackend) //to load translations from /public/locales
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        supportedLngs: ["fr", "mg", "en"],
        fallbackLng: "fr",
        ns: ["common", "home", "studio", "lists"], //namespaces
        defaultNS: "common", //default namespace
        fallbackNS: "common", //fallback namespace
        load: "languageOnly",
        detection: {
            order: ["localStorage"],
            caches: ["localStorage"],
        },
        backend: {
            loadPath: "/locales/{{lng}}/{{ns}}.json",
        },
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
