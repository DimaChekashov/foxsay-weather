import React from 'react';
import { YMaps, Map, ZoomControl } from "react-yandex-maps";

import './WeatherMap.scss';

function WeatherMap(props){ 
    // console.log(props.coord.lan);
    // console.log(props.coord.lat);
    return (
        <div className="weather-map">
            <YMaps>
                <Map
                    defaultState={{
                        center: [55.3195, 52.0694],
                        controls: [],
                        zoom: 11,
                    }}
                    className="map"
                >
                    <ZoomControl options={{ float: "right" }} />
                </Map>
            </YMaps>
        </div>
    )
}

export default WeatherMap;