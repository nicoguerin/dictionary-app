import { createContext, useState } from "react";
import { THEME_VALUES } from "../constants";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => {
        const storedTheme = window.localStorage.getItem('theme');
        if (storedTheme) return storedTheme;
        return THEME_VALUES.dark;
    });

    return (
        <ThemeContext.Provider value={{
            theme,
            setTheme
        }}>
            {children}
        </ThemeContext.Provider>
    );
}