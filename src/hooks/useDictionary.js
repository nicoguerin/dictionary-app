import { useContext, useRef, useState } from "react";
import { DictionaryContext } from "../context/Dictionary";
import { API_URL } from "../constants";

export default function useDictionary() {
    const { searchValue, setSearchValue, searchAnswer, setSearchAnswer } = useContext(DictionaryContext);
    const [_, setError] = useState(null);
    const previousSearch = useRef(searchValue);

    const handleUpdateSearchValue = (e) => setSearchValue(e.target.value);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleSearchDefinition(searchValue);
    }

    const handleSearchDefinition = (search) => {
        if (search.trim() === '' || previousSearch.current === search) return;

        setSearchValue(search);
        fetch(API_URL + search)
            .then(res => {
                if (!res.ok) setError("Error " + res.status);
                return res.json();
            })
            .then(res => {
                if (res.title) setSearchAnswer([]);
                else {
                    previousSearch.current = search;
                    setSearchAnswer(res);
                }
            })
            .catch(err => setError(err))
    }

    const handleSynonymDefinition = (synonym) => handleSearchDefinition(synonym);

    return { searchValue, searchAnswer, handleUpdateSearchValue, handleFormSubmit, handleSynonymDefinition };
}