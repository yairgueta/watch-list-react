import React, {useState} from 'react';
import './search-bar.css'
import Autosuggest from 'react-autosuggest';


const SearchBar = ({searchKeyword, onQuerySelected}) => {
    const [suggestions, setSuggestions] = useState([]);
    const [value, setValue] = useState("");

    const handleSearch = async (keyword) => {
        const results = await searchKeyword(keyword);
        setSuggestions(results);
    }

    const onSuggestionsFetchRequested = ({value, reason}) => handleSearch(value)

    const onSuggestionsClearRequested = () => setSuggestions([])

    const getSuggestionValue = item => `${item.Title} (${item.Year})`

    const renderSuggestion = item => <span>{`${item.Title} (${item.Year})`}</span>

    const inputProps = {
        value, // usually comes from the application state
        onChange: (e, {newValue}) => setValue(newValue), // called every time the input value changes
        placeholder: "Search A Movie"
    };

    const onSuggestionSelected = (event, { suggestion }) => onQuerySelected(suggestion)


    return (
        <div className="d-flex flex-column align-items-center mt-2">
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                onSuggestionsClearRequested={onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
                onSuggestionSelected={onSuggestionSelected}
            />
        </div>
    );
};

SearchBar.propTypes = {};

export default SearchBar;
