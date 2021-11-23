import React from "react";
import "./AddCity.scss";

import searchIcon from "../../assets/search-icon.svg";

function AddCity() {
    return (
        <div className="search-city-wrapper">
            <div className="search-city">
                <input
                    className="search-city-input"
                    placeholder="Найти город..."
                    autoFocus
                />
                <button className="search-city-btn">
                    <img src={searchIcon} alt="search icon" />
                </button>
            </div>
        </div>
    );
}

export default AddCity;
