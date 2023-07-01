import useDictionary from "../hooks/useDictionary";

export default function MeaningSynonyms({ synonyms }) {
    const { handleSynonymDefinition } = useDictionary();

    if (synonyms.length === 0) return <span className="pl-5 text-[#bc98d5]">No synonyms available</span>
    return (
        <ul className="flex flex-col gap-2 pl-5 md:flex-row md:gap-5">
            {synonyms.map((synonym, index) =>
                <li key={index} className="text-[#bc98d5]">
                    <button
                        onClick={() => handleSynonymDefinition(synonym)}
                    >{synonym}</button>
                </li>
            )}
        </ul>
    );
}