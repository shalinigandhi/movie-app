import React, { useState } from 'react'
import { IconSearch, IconMode, IconMenu, IconCross } from '../lib/icons';
import './header.scss'

const Header = ({ onSearch, resetSearch }) => {
    const [searchValue, setSearchValue] = useState("");

    const handleSearch = (e) => {
        setSearchValue(e.target.value);
        onSearch(e.target.value);
    }

    const reset = () => {
        setSearchValue("");
        resetSearch();
    }

    const onKeyDown = (e) => {
        if (e.keyCode === 8) {
            resetSearch();
        }
    }

    return (
        <header className='header-wrapper'>
            <div className='header-left active'>
                <span className='icon'><IconSearch width='23' height='23' /></span>
                <input
                    className='search-input'
                    type="text"
                    value={searchValue}
                    onChange={handleSearch}
                    onKeyDown={onKeyDown}
                />
                <span className='icon' onClick={reset}><IconCross/></span>
            </div>
            <div className='header-right'>
                <span className='icon'><IconMode /></span>
                <span className='icon'><IconMenu/></span>
            </div>
        </header>
    )
}

export default Header;