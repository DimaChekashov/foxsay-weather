import React, { useEffect, useState } from 'react';
import { getCity } from "../../api/openApi.js";
import WeatherFact from '../WeatherFact/WeatherFact.jsx';
import WeatherMap from '../WeatherMap/WeatherMap';

import './WeatherTop.scss';


function WeatherTop(){ 
    const cityId = "465543";
    const [cityWeather, setCityWeather] = useState({});

    useEffect(() => {
        getCity(cityId).then(setCityWeather).catch(console.error);
    }, []);

    const { coord, name } = cityWeather;
    console.log(coord);

    return (
        <div className="weather__top">
            <WeatherFact townName={name}/>
            <WeatherMap />
        </div>
    )
}

export default WeatherTop;