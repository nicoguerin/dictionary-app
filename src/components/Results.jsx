import MeaningsList from "./MeaningsList";
import WordPhonetics from "./WordPhonetics";
import useDictionary from "../hooks/useDictionary";
import useTheme from "../hooks/useTheme";
import { THEME_VALUES } from "../constants";

export default function Results() {
    const { searchAnswer } = useDictionary();
    const { theme } = useTheme();

    if (searchAnswer.length === 0) return <div className={`pt-5 text-center font-semibold ${theme === THEME_VALUES.dark ? "text-white" : "text-black"} transition-all`}>No results found...</div>
    return (
        <section className="flex flex-col gap-3 py-5">
            <WordPhonetics searchAnswer={searchAnswer} />
            <MeaningsList meanings={searchAnswer[0]?.meanings} />
        </section>
    );
}