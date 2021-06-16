import React from 'react';
import Search from '../Search/Search';

import './Header.scss';

function Header(){ 
    return (
        <div className="header-bar">
           <h3 className="header-title">FoxSay Weather</h3>
           <Search/>
        </div>
    )
}

export default Header;