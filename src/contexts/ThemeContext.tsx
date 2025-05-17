import { THEME_KEY } from "@/helpers/constant";
import { Itheme } from "@/helpers/types";
import {
    createContext,
    FC,
    ReactNode,
    useCallback,
    useEffect,
    useState,
} from "react";
import { flushSync } from "react-dom";

type ThemeContextType = {
    theme: Itheme;
    toggleTheme: (theme: Itheme) => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

const applyDocumentClass = (theme: Itheme) => {
    if (theme === "dark") {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
};

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Itheme>(() => {
        const storedTheme = localStorage.getItem(THEME_KEY);
        return (storedTheme ?? "dark") as Itheme;
    });

    useEffect(() => {
        applyDocumentClass(theme);
        localStorage.setItem(THEME_KEY, theme);
    }, [theme]);

    const toggleTheme = useCallback((newTheme: Itheme) => {
        if ("startViewTransition" in document) {
            document.startViewTransition(() => {
                flushSync(() => {
                    setTheme(newTheme);
                });
            });
        } else {
            flushSync(() => {
                setTheme(newTheme);
            });
        }
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
