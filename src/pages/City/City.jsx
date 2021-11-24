import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCityState, addCityDailyState } from "../../redux/weatherSlice";
import { getWeather } from "../../api/openApi.js";

import Main from "../../components/Main/Main";

import "./City.scss";
import { numTemp } from "../../utils/utils";
import WeatherMap from "../../components/WeatherMap/WeatherMap";
import WeatherDays from "../../components/WeatherDays/WeatherDays";
import { Link } from "react-router-dom";

import backIcon from "../../assets/icon-back.svg";

function City() {
    const cityId = "465543";
    const dataCity = useSelector((state) => state.weather.dataCity);
    const dispatch = useDispatch();

    useEffect(() => {
        getWeather
            .getCity(cityId)
            .then((state) => {
                dispatch(addCityState(state));
            })
            .catch(console.error);
    }, [dispatch]);

    useEffect(() => {
        if (!(Object.keys(dataCity).length === 0)) {
            const { lat, lon } = dataCity.coord;
            getWeather
                .getCityDaily(lat, lon)
                .then((state) => {
                    dispatch(addCityDailyState(state));
                })
                .catch(console.error);
        }
    }, [dispatch, dataCity]);

    return (
        <div className="city-wrapper">
            <Link to="/" className="go-back">
                <img src={backIcon} alt="Иконка назад" />
            </Link>
            <div className="city fadeInBottom">
                <div className="city__top">
                    <div className="city__top-left">
                        <h3 className="city-temp">{numTemp(12)}</h3>
                        <h4 className="city-status">Облачно</h4>
                        <ul className="city__temps">
                            <li>
                                <span className="city__temps-label">Влага</span>
                                <span className="city__temps-temp">45%</span>
                            </li>
                            <li>
                                <span className="city__temps-label">Ветер</span>
                                <span className="city__temps-temp">34 K/M</span>
                            </li>
                        </ul>
                    </div>
                    <h2 className="city-name">Заинск</h2>
                </div>
                <div className="city__map">
                    <WeatherMap />
                </div>
                <div className="city__days">
                    <WeatherDays />
                </div>
            </div>
        </div>
    );
    // return <Main />;
}

export default City;
