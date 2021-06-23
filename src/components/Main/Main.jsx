import React from 'react';
import CurrentWeather from '../WeatherBlocks/CurrentWeather';
import WeatherTop from '../WeatherTop/WeatherTop';

import './Main.scss';


function Main(){ 
    return (
        <div className="weather">
            <WeatherTop/>
            <CurrentWeather/>
        </div>
    )
}

export default Main;