import React, {useState} from 'react';
import './search-bar.css'
import {Dropdown} from "react-bootstrap";
import Autosuggest from 'react-autosuggest';


const SearchBar = ({searchKeyword}) => {
    const [searchList, setSearchList] = useState([]);
    const [searchBarFocus, setSearchBarFocus] = useState(false);
    const [listFocus, setListFocus] = useState(false);
    let nameInput = null;

    const handleSearch = async (keyword) => {
        const results = await searchKeyword(keyword);
        setSearchList(results);
    }

    const renderSearchList = (props) => {
        console.log(searchList)
        return (
            <Dropdown.Menu show className='tooltip'>
                {searchList.map((item, index) => <Dropdown.Item key={index}>{JSON.stringify(item)}</Dropdown.Item>)}
            </Dropdown.Menu>
        )
    }

    const itemToString = item => `${item.Title} (${item.Year})`

    return (
        <>
            <div className="dropdown">
                <div className='form-floating mb-2'>
                    <input type='search' id='movie-name' className='form-control' placeholder=""
                           onChange={(e) => handleSearch(e.target.value)}
                           onFocus={()=>setSearchBarFocus(true)}
                           onBlur={()=>setSearchBarFocus(false)}
                    />
                    <label htmlFor='movie-name'>Movie Name</label>
                </div>
                {(searchBarFocus || listFocus) &&
                    <ul className="dropdown-menu show" aria-labelledby="dropdownMenuButton"
                        onFocus={()=>setListFocus(true)}
                        onBlur={()=>setListFocus(false)}
                    >
                    {searchList.map((item, index) =>
                        <li><a href="#" className="dropdown-item user-select-none" key={index}>{itemToString(item)}</a></li>)}
                    </ul>
                }
                <Autosuggest
                    suggestions={searchList}
                    onSuggestionsFetchRequested={(v) => {
                        console.log("suggestion fetch",v)}}
                    // onSuggestionsClearRequested={}
                    getSuggestionValue={(v) => {
                        console.log("get sugg valu", v)
                    }}
                    // renderSuggestion={}
                    // inputProps={inputProps}
                />

            </div>
        </>
    );
};

SearchBar.propTypes = {};

export default SearchBar;
