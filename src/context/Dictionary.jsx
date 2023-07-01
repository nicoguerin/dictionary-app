import { createContext, useState } from "react";

export const DictionaryContext = createContext();

export default function DictionaryProvider({children}) {
    const [searchValue, setSearchValue] = useState('');
    const [searchAnswer, setSearchAnswer] = useState([]);

    return (
        <DictionaryContext.Provider value={{
            searchValue, setSearchValue,
            searchAnswer, setSearchAnswer
        }}>
            {children}
        </DictionaryContext.Provider>
    );
}