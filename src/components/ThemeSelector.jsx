import MoonIcon from "./MoonIcon";
import Selector from "./Selector";
import SunIcon from "./SunIcon";
import useTheme from "../hooks/useTheme";
import { THEME_VALUES } from "../constants";

export default function ThemeSelector() {
    const { theme } = useTheme();

    return (
        <div className="flex items-center gap-3">
            <Selector />
            {theme === THEME_VALUES.dark ? <SunIcon /> : <MoonIcon />}
        </div>
    );
}