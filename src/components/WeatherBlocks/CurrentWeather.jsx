import React from 'react';
import { useSelector } from 'react-redux';

import SunriseUp from '../../assets/sunrise_up.svg';
import SunriseDown from '../../assets/sunrise_down.svg';

import './WeatherBlocks.scss';
import { numTemp } from '../../utils/utils';

function CurrentWeather() {
    const dataCityDaily = useSelector((state) => state.weather.dataCityDaily);

    function setTime(date, timeZone) {
        let time = new Date((date + (timeZone)) * 1000)

        return time.toLocaleTimeString('en-GB',{timeZone: 'UTC'}).slice(0,-3)
    }

    const { timezone_offset } = dataCityDaily;
    const { sunset, sunrise, feels_like, pressure, humidity, dew_point, uvi, clouds, wind_speed } = dataCityDaily.current;

    console.log(dataCityDaily.current)

    return (
        <div className="weather-block">
            <h3 className="weather-block__title">Погода на сегодня</h3>
            <div className="weather-block__wrapper">
                <div className="weather-sunrise">
                    <div className="weather-sunrise__block weather-sunrise__block-up">
                        <h5 className="weather-sunrise__title">Восход</h5>
                        <img src={SunriseUp} alt="Иконка восхода" className="weather-sunrise__icon" />
                        <div className="weather-sunrise__time">{setTime(sunrise, timezone_offset)}</div>
                    </div>
                    <div className="weather-sunrise__block weather-sunrise__block-down">
                        <h5 className="weather-sunrise__title">Заход</h5>
                        <img src={SunriseDown} alt="Иконка восхода" className="weather-sunrise__icon" />
                        <div className="weather-sunrise__time">{setTime(sunset, timezone_offset)}</div>
                    </div>
                </div>
                <div className="weather-current__items">
                    <div className="weather-current__item"><div className="weather-current__item-wrapper">По ощущению: <span>{numTemp(feels_like)}</span></div></div>
                    <div className="weather-current__item"><div className="weather-current__item-wrapper">Давление: <span>{pressure}</span></div></div>
                    <div className="weather-current__item"><div className="weather-current__item-wrapper">Влажность: <span>{humidity}%</span></div></div>
                    <div className="weather-current__item"><div className="weather-current__item-wrapper">Точка росы: <span>{dew_point}</span></div></div>
                    <div className="weather-current__item"><div className="weather-current__item-wrapper">Ультрафиолетовый индекс: <span>{uvi}</span></div></div>
                    <div className="weather-current__item"><div className="weather-current__item-wrapper">Облачность: <span>{clouds}</span></div></div>
                    <div className="weather-current__item"><div className="weather-current__item-wrapper">Скорость Ветра: <span>{wind_speed} м/с</span></div></div>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather;