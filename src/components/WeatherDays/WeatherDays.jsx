import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getWeather } from "../../api/openApi.js";
import { numTemp } from "../../utils/utils";
import { addCityDaily } from "../../redux/weatherSlice";

import "./WeatherDays.scss";

function WeatherDays({ cityCoord, name }) {
    const dataCityDaily = useSelector((state) => state.weather.dataCityDaily);
    const dispatch = useDispatch();
    const { daily } = dataCityDaily;

    useEffect(() => {
        getWeather
            .getCityDaily(cityCoord.lat, cityCoord.lon, name)
            .then((state) => {
                dispatch(addCityDaily(state));
            })
            .catch(console.error);
    }, [cityCoord.lat, cityCoord.lon, name, dispatch]);

    if (Object.keys(dataCityDaily).length === 0) return <h3>Loading</h3>;

    return (
        <div className="days">
            <div className="days__item">
                <h3 className="days__item-week">Понедельник</h3>
                <div className="days__item-img">
                    <img
                        src={`https://openweathermap.org/img/wn/${daily[0].weather[0].icon}@2x.png`}
                        alt="test"
                    />
                </div>
                <h4 className="days__item-temp">
                    {numTemp(daily[0].temp.day)}
                </h4>
            </div>
            <div className="days__item">
                <h3 className="days__item-week">Вторник</h3>
                <div className="days__item-img">
                    <img
                        src={`https://openweathermap.org/img/wn/${daily[1].weather[0].icon}@2x.png`}
                        alt="test"
                    />
                </div>
                <h4 className="days__item-temp">
                    {numTemp(daily[1].temp.day)}
                </h4>
            </div>
            <div className="days__item">
                <h3 className="days__item-week">Среда</h3>
                <div className="days__item-img">
                    <img
                        src={`https://openweathermap.org/img/wn/${daily[2].weather[0].icon}@2x.png`}
                        alt="test"
                    />
                </div>
                <h4 className="days__item-temp">
                    {numTemp(daily[2].temp.day)}
                </h4>
            </div>
            <div className="days__item">
                <h3 className="days__item-week">Четверг</h3>
                <div className="days__item-img">
                    <img
                        src={`https://openweathermap.org/img/wn/${daily[3].weather[0].icon}@2x.png`}
                        alt="test"
                    />
                </div>
                <h4 className="days__item-temp">
                    {numTemp(daily[3].temp.day)}
                </h4>
            </div>
            <div className="days__item">
                <h3 className="days__item-week">Пятница</h3>
                <div className="days__item-img">
                    <img
                        src={`https://openweathermap.org/img/wn/${daily[4].weather[0].icon}@2x.png`}
                        alt="test"
                    />
                </div>
                <h4 className="days__item-temp">
                    {numTemp(daily[4].temp.day)}
                </h4>
            </div>
        </div>
    );
}

export default WeatherDays;
