import React, { useEffect, useState } from 'react';
import { getCity } from "../../api/openApi.js";
import WeatherFact from '../WeatherFact/WeatherFact.jsx';
import WeatherMap from '../WeatherMap/WeatherMap';
import { useSelector} from 'react-redux';

import './WeatherTop.scss';


function WeatherTop(){ 
    const data = useSelector((state) => state.weather.data);

    const { coord } = data;

    return (
        <div className="weather__top">
            <WeatherFact/>
            <WeatherMap coord={coord}/>
        </div>
    )
}

export default WeatherTop;