import DictionaryIcon from "./DictionaryIcon";
import ThemeSelector from "./ThemeSelector";

export default function Header() {
    return (
        <header className="flex justify-between items-center">
            <DictionaryIcon />
            <ThemeSelector />
        </header>
    );
}