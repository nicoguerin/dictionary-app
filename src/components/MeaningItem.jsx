import MeaningDefinitions from "./MeaningDefinitions";
import MeaningSynonyms from "./MeaningSynonyms";
import useTheme from "../hooks/useTheme";
import { THEME_VALUES } from "../constants";

export default function MeaningItem({ meaning }) {
    const { theme } = useTheme();

    return (
        <div>
            <div className="flex justify-between items-center gap-10">
                <span className="text-xl font-semibold">{meaning.partOfSpeech}</span>
                <div className={`w-full h-[1px] ${theme === THEME_VALUES.dark ? "bg-slate-300" : "bg-black"} transition-colors`}/>
            </div>
            <div>
                <span>Meaning</span>
                <MeaningDefinitions definitions={meaning.definitions} />
                <div className="flex flex-col gap-1 md:flex-row md:gap-5">
                    <span>Synonyms</span>
                    <MeaningSynonyms synonyms={meaning.synonyms.slice(0, 5)} />
                </div>
            </div>
        </div>
    );
}