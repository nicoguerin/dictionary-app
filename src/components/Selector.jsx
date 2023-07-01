import { THEME_VALUES } from "../constants";
import useTheme from "../hooks/useTheme";

export default function Selector() {
    const { theme, modifyTheme } = useTheme();

    return (
        <button
            title="Theme selector (Left dark theme / Right light theme"
            onClick={modifyTheme}
            className={`flex border-2 transition-colors
             ${theme === THEME_VALUES.dark ? "border-white justify-start" : "border-black justify-end"} w-14 
                    h-7 rounded-full p-1`}>
            <div
                className={`${theme === THEME_VALUES.dark ? "bg-white" : "bg-black"} h-full aspect-square 
                            rounded-full transition-colors`}
            />
        </button>
    );
}