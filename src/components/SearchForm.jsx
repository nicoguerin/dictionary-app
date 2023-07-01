import useDictionary from "../hooks/useDictionary";

export default function SearchForm() {
    const { searchValue, handleFormSubmit, handleUpdateSearchValue } = useDictionary();

    return (
        <form onSubmit={handleFormSubmit}>
            <div className="bg-[#f4f4f4] flex justify-between items-center py-1 px-2 md:px-4 rounded-lg">
                <input
                    value={searchValue}
                    onChange={handleUpdateSearchValue}
                    placeholder="Keyboard, enjoy, ..."
                    className={`bg-transparent w-full outline-none text-black font-bold`}
                />
                <button title="Submit button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 -0.5 25 25" className="w-10">
                        <g
                            stroke="#a47ad1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.5 11.146a6.144 6.144 0 1112.288-.002 6.144 6.144 0 01-12.288.002z"
                                clipRule="evenodd"
                            ></path>
                            <path d="M15.989 15.49l3.511 3.511"></path>
                        </g>
                    </svg>
                </button>
            </div>
        </form>
    );
}