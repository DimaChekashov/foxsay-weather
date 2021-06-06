import React from 'react';

import './WeatherFact.scss';

function WeatherFact(props){ 
    return (
        <div className="weather-fact">
            <h1>{props.townName}</h1>
        </div>
    )
}

export default WeatherFact;