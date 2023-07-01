import { useRef, useState } from "react";
import PlayIcon from "./PlayIcon";
import StopIcon from "./StopIcon";

export default function AudioPlayer({ audioSrc }) {
    const audioRef = useRef();
    const [audioPlaying, setAudioPlaying] = useState(false);

    const handleAudioState = () => {
        setAudioPlaying(!audioPlaying);
    }

    const handleAudioPlaying = () => {
        handleAudioState();
        audioRef?.current?.play();
    }

    return (
        <div>
            <audio
                src={audioSrc ?? ''}
                ref={audioRef}
                onEnded={handleAudioState}
            />
            <button
                onClick={handleAudioPlaying}
                className={`bg-[#e8cffd] w-fit rounded-full p-1`}
                disabled={audioSrc === ''}
            >
                {!audioPlaying ? <PlayIcon /> : <StopIcon />}
            </button>
        </div>
    );
}