import React from 'react';
import WeatherTop from '../WeatherTop/WeatherTop';
import Loader from '../Loader/Loader';

import './Main.scss';


function Main(){ 
    return (
        //<Loader/>
        <div className="weather">
            <WeatherTop/>
        </div>
    )
}

export default Main;