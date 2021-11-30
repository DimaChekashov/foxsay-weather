import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getWeather } from "../../api/openApi.js";
import { numTemp } from "../../utils/utils";
import { addCityDailyState } from "../../redux/weatherSlice";

import "./WeatherDays.scss";

function WeatherDays({ cityCoord }) {
    const dataCityDaily = useSelector((state) => state.weather.dataCityDaily);
    const dispatch = useDispatch();

    useEffect(() => {
        getWeather
            .getCityDaily(cityCoord.lat, cityCoord.lon)
            .then((state) => {
                dispatch(addCityDailyState(state));
            })
            .catch(console.error);
    }, [cityCoord.lat, cityCoord.lon, dispatch]);

    return (
        <div className="days">
            <div className="days__item">
                <h3 className="days__item-week">Понедельник</h3>
                <div className="days__item-img">
                    <img
                        src="https://openweathermap.org/img/wn/13n@2x.png"
                        alt="test"
                    />
                </div>
                <h4 className="days__item-temp">{numTemp(20)}</h4>
            </div>
            <div className="days__item">
                <h3 className="days__item-week">Вторник</h3>
                <div className="days__item-img">
                    <img
                        src="https://openweathermap.org/img/wn/13n@2x.png"
                        alt="test"
                    />
                </div>
                <h4 className="days__item-temp">{numTemp(20)}</h4>
            </div>
            <div className="days__item">
                <h3 className="days__item-week">Среда</h3>
                <div className="days__item-img">
                    <img
                        src="https://openweathermap.org/img/wn/13n@2x.png"
                        alt="test"
                    />
                </div>
                <h4 className="days__item-temp">{numTemp(20)}</h4>
            </div>
            <div className="days__item">
                <h3 className="days__item-week">Четверг</h3>
                <div className="days__item-img">
                    <img
                        src="https://openweathermap.org/img/wn/13n@2x.png"
                        alt="test"
                    />
                </div>
                <h4 className="days__item-temp">{numTemp(20)}</h4>
            </div>
            <div className="days__item">
                <h3 className="days__item-week">Пятница</h3>
                <div className="days__item-img">
                    <img
                        src="https://openweathermap.org/img/wn/13n@2x.png"
                        alt="test"
                    />
                </div>
                <h4 className="days__item-temp">{numTemp(20)}</h4>
            </div>
        </div>
    );
}

export default WeatherDays;
