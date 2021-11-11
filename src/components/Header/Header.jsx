import React from 'react';
import Search from '../Search/Search';
import Time from '../Time/Time';

import './Header.scss';

function Header() {
    return (
        <div className="header-bar">
            <h3 className="header-title">FoxSay Weather</h3>
            <Time />
            <Search />
        </div>
    )
}

export default Header;