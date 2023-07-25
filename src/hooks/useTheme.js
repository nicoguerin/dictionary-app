import { useContext } from "react";
import { ThemeContext } from "../context/Theme";
import { THEME_VALUES } from "../constants";

export default function useTheme() {
    const { theme, setTheme } = useContext(ThemeContext);

    const modifyTheme = () => {
        let prevTheme = theme, newTheme = "";
        if (prevTheme === THEME_VALUES.dark) newTheme = THEME_VALUES.light;
        else newTheme = THEME_VALUES.dark;
        setTheme(newTheme);
        window.sessionStorage.setItem('theme', newTheme);
    }

    return { theme, modifyTheme };
}