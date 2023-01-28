import React, { useState } from 'react'
import { isMobile } from 'react-device-detect';
import { IconSearch, IconPlaylist, IconMovie, IconTVShows, IconMyList, IconWatchLater, IconRecomended, IconSettings, IconLogout, IconCross } from '../lib/icons';
import './sidebar.scss';

const Sidebar = ({onToggle, isSidebarOpen}) => {
    const [active, setActive] = useState(0);

    const onNavigation = (id) => {
        setActive(id);
        if(isMobile) {
            onToggle(false);
        }
    }

    return (
        <aside className={`sidebar-wrapper ${!isSidebarOpen && 'hide-sidebar'}`}>
            <span className='icon-cross hide-desktop' onClick={() => onToggle(false)}><IconCross/></span>
            <div className="profile-details">
                <div className="user-img">
                    <img src="/images/userImg.svg" alt="Eric Hoffman"/>
                </div>
                <p className="user-name">Eric Hoffman</p>
            </div>
            <ul className="navigation-list">
                {
                    links.map((link) => (
                        <li
                            key={link.id}
                            className={`nav-link ${active == link.id && 'active'}`}
                            onClick={() => onNavigation(link.id)}
                        >
                            <span className="icon">{link.icon}</span>
                            <span className="name">{link.name}</span>
                        </li>
                    ))
                }
            </ul>
        </aside>
    )
}

const links = [
    {
        'icon': <IconSearch />,
        'name': 'Discover',
        'id': 0
    },
    {
        'icon': <IconPlaylist />,
        'name': 'Playlist',
        'id': 1
    },
    {
        'icon': <IconMovie />,
        'name': 'Movie',
        'id': 2
    },
    {
        'icon': <IconTVShows />,
        'name': 'TV Shows',
        'id': 3
    },
    {
        'icon': <IconMyList />,
        'name': 'My List',
        'id': 4
    },
    {
        'icon': <IconWatchLater />,
        'name': 'Watch Later',
        'id': 5
    },
    {
        'icon': <IconRecomended/>,
        'name': 'Recomended',
        'id': 6
    },
    {
        'icon': <IconSettings/>,
        'name': 'Settings',
        'id': 7
    },
    {
        'icon': <IconLogout/>,
        'name': 'Logout',
        'id': 8
    }
];

export default Sidebar;