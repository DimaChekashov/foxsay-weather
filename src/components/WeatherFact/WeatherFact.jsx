import React from 'react';
import { useSelector} from 'react-redux';
import {numTemp} from '../../utils/utils';

import './WeatherFact.scss';

function WeatherFact(props){ 
    const data = useSelector((state) => state.weather.data);

    const {name, main, weather} = data;
    const {temp, feels_like, humidity} = main;
    const {description, icon} = weather[0];
    
    return (
        <div className="weather-fact">
            <div className="weather-fact__left">
                <h3 className="weather-fact__name">Погода: <span>{name}</span></h3>
                <h2 className="weather-fact__temp">{numTemp(temp)}</h2>
                <h5 className="weather-fact__temp-feels">Ощущается как: {numTemp(feels_like)}</h5>
                <h5 className="weather-fact__wet">Влажность: {humidity}%</h5>
            </div>
            <div className="weather-fact__right">
                <div className="weather-fact__icon">
                    <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} className="weather-fact__icon-img" alt="Иконка погоды"/>
                    <h4 className="weather-fact__icon-text">{description}</h4>
                </div>
            </div>
        </div>
    )
}

export default WeatherFact;