import React, { useState } from 'react'
import { IconSearch, IconMode, IconMenu, IconCross, IconMyList } from '../lib/icons';
import './header.scss'

const Header = ({ onSearch, resetSearch }) => {
    const [searchActive, setSearchActive] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    const handleSearch = (e) => {
        setSearchValue(e.target.value);
        onSearch(e.target.value);
    }

    const reset = () => {
        setSearchValue("");
        resetSearch();
        setSearchActive(false);
    }

    const onKeyDown = (e) => {
        if (e.keyCode === 8) {
            resetSearch();
        }
    }

    return (
        <header className='header-wrapper'>
            <div className={`header-left ${searchActive && 'active'}`}>
                <span className='icon' onClick={() => setSearchActive(true)}><IconSearch width='23' height='23' /></span>
                <input
                    className={`search-input ${searchActive && 'active'}`}
                    type="text"
                    value={searchValue}
                    onChange={handleSearch}
                    onKeyDown={onKeyDown}
                />
                <span className={`icon icon-cross ${searchActive && 'active'}`} onClick={reset}><IconCross/></span>
            </div>
            <div className='header-right'>
                <span className='icon icon-mode'><IconMode /></span>
                <span className='icon'><IconMenu/></span>
            </div>
        </header>
    )
}

export default Header;