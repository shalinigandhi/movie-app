import { IconSearch, IconMode, IconMenu, IconCross } from '../lib/icons';
import './header.scss'

const Header = () => {
    return (
        <header className='header-wrapper'>
            <div className='header-left active'>
                <span className='icon'><IconSearch width='23' height='23' /></span>
                <input
                    className='search-input'
                    type="text"
                />
                <span className='icon'><IconCross/></span>
            </div>
            <div className='header-right'>
                <span className='icon'><IconMode /></span>
                <span className='icon'><IconMenu/></span>
            </div>
        </header>
    )
}

export default Header;