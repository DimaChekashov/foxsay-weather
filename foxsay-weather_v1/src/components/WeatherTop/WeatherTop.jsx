import React from 'react';
import WeatherFact from '../WeatherFact/WeatherFact.jsx';
import WeatherMap from '../WeatherMap/WeatherMap';

import './WeatherTop.scss';

function WeatherTop(){ 
    return (
        <div className="weather__top">
            <WeatherFact/>
            <WeatherMap/>
        </div>
    )
}

export default WeatherTop;