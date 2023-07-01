import { THEME_VALUES } from "../constants";
import useTheme from "../hooks/useTheme";
import AudioPlayer from "./AudioPlayer";

export default function WordPhonetics({ searchAnswer }) {
    const { theme } = useTheme();

    const findPhoneticAudio = () => {
        let phonetics = searchAnswer[0]?.phonetics ?? [];
        for (let i = 0; i < phonetics.length; ++i) {
            let actPhonetic = phonetics[i];
            if (actPhonetic.audio) return i;
        }
        return -1;
    }

    const audioIndex = findPhoneticAudio();

    return (
        <div className="flex justify-between items-center">
            <div className="flex flex-col gap-1">
                <span
                    className={`text-5xl font-bold ${theme === THEME_VALUES.dark ? "text-white" : "text-black"} transition-colors`}
                >{searchAnswer[0]?.word}</span>
                <span
                    className={`text-xl text-[#d5b4e7]`}
                >{searchAnswer[0]?.phonetic}</span>
            </div>
            <AudioPlayer audioSrc={audioIndex === -1 ? '' : searchAnswer[0]?.phonetics[audioIndex].audio} />
        </div>
    );
}