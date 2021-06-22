import React from 'react';

import './WeatherFact.scss';

function WeatherFact(props){ 
    return (
        <div className="weather-fact">
            <div className="weather-fact__left">
                <h3 className="weather-fact__name">Погода: <span>{props.townName}</span></h3>
                <h2 className="weather-fact__temp">34°</h2>
                <h5 className="weather-fact__temp-feels">Ощущается как: 41°</h5>
                <h5 className="weather-fact__wet">Влажность: 60%</h5>
            </div>
            <div className="weather-fact__right">
                <div className="weather-fact__icon">
                    <img src="url.png" className="weather-fact__icon-img" alt="Иконка погоды"/>
                    <h4 className="weather-fact__icon-text">Ясно</h4>
                </div>
            </div>
        </div>
    )
}

export default WeatherFact;