import useTheme from "../hooks/useTheme";

export default function DictionaryIcon() {
    const { theme } = useTheme();

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 transition-colors">
            <g>
                <g fill="none" fillRule="evenodd">
                    <g fill={theme === 'light' ? "#000" : "#fff"}>
                        <path d="M18 2a2.5 2.5 0 012.5 2.5v14.25a.75.75 0 01-.75.75H5.5a1 1 0 001 1h13.25a.75.75 0 010 1.5H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2zm-2 3H8a1 1 0 00-1 1v1a1 1 0 001 1h8a1 1 0 001-1V6a1 1 0 00-1-1z"></path>
                    </g>
                </g>
            </g>
        </svg>
    );
}