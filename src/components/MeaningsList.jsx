import MeaningItem from "./MeaningItem";
import useTheme from "../hooks/useTheme";
import { THEME_VALUES } from "../constants";

export default function MeaningsList({ meanings }) {
    const { theme } = useTheme();

    return (
        <div className={`flex flex-col gap-10 ${theme === THEME_VALUES.dark ? "text-white" : "text-black"} transition-all`}>
            {meanings.map((meaning, index) =>
                <MeaningItem
                    key={index}
                    meaning={meaning}
                />
            )}
        </div>
    );
}