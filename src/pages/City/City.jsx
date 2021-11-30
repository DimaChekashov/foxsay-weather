import React from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { numTemp } from "../../utils/utils";
import WeatherMap from "../../components/WeatherMap/WeatherMap";
import WeatherDays from "../../components/WeatherDays/WeatherDays";
import "./City.scss";

import backIcon from "../../assets/icon-back.svg";

function City() {
    let { itemId } = useParams("itemId");
    const userCities = useSelector((state) => state.weather.userCities);
    const { name, main, weather, wind, coord } = userCities[itemId];

    if (!userCities) return <h2>Not Fountd</h2>;
    return (
        <div className="city-wrapper">
            <Link to="/" className="go-back">
                <img src={backIcon} alt="Иконка назад" />
            </Link>
            <div className="city fadeInBottom">
                <div className="city__top">
                    <div className="city__top-left">
                        <h3 className="city-temp">{numTemp(main.temp)}</h3>
                        <h4 className="city-status">
                            {weather[0].description}
                        </h4>
                        <ul className="city__temps">
                            <li>
                                <span className="city__temps-label">Влага</span>
                                <span className="city__temps-temp">
                                    {main.humidity}%
                                </span>
                            </li>
                            <li>
                                <span className="city__temps-label">Ветер</span>
                                <span className="city__temps-temp">
                                    {wind.speed} K/M
                                </span>
                            </li>
                        </ul>
                    </div>
                    <h2 className="city-name">{name}</h2>
                </div>
                <div className="city__map">
                    <WeatherMap cityCoord={coord} />
                </div>
                <div className="city__days">
                    <WeatherDays cityCoord={coord} />
                </div>
            </div>
        </div>
    );
}

export default City;
