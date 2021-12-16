import React from "react";
import { useDispatch } from "react-redux";
import "./AddCity.scss";
import { getWeather } from "../../api/openApi.js";
import { addCity } from "../../redux/weatherSlice";

import searchIcon from "../../assets/search-icon.svg";
import { useState } from "react";

function AddCity() {
    const [searchInput, setSearchInput] = useState("");
    const dispatch = useDispatch();

    const onSearch = () => {
        console.log(searchInput);
        getWeather
            .getCityByName(searchInput)
            .then((state) => {
                dispatch(addCity(state));
            })
            .catch(console.error);
        setSearchInput("");
    };

    return (
        <div className="search-city-wrapper">
            <div className="search-city">
                <input
                    className="search-city-input"
                    placeholder="Найти город..."
                    autoFocus
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
                <button className="search-city-btn" onClick={onSearch}>
                    <img src={searchIcon} alt="search icon" />
                </button>
            </div>
        </div>
    );
}

export default AddCity;
