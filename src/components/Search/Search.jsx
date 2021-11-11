import React from 'react';

import './Search.scss';

const Search = () => {
    return (
        <div className="search">
            <input className="search__input" type="text" placeholder="Найти город..." />
            <button className="search__btn">Найти</button>
        </div>
    );
}

export default Search;