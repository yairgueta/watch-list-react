import React, {useState} from 'react';
import './search-bar.css'
import {Dropdown} from "react-bootstrap";

const SearchBar = ({searchKeyword}) => {
    const [searchList, setSearchList] = useState([]);


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
                           onChange={(e) => handleSearch(e.target.value)}/>
                    <label htmlFor='movie-name'>Movie Name</label>
                </div>
                <ul className="dropdown-menu show" aria-labelledby="dropdownMenuButton">
                    {searchList.map((item, index) =>
                        <li><a href="#" className="dropdown-item user-select-none" key={index}>{itemToString(item)}</a></li>)}
                </ul>
            </div>
        </>
    );
};

SearchBar.propTypes = {};

export default SearchBar;
