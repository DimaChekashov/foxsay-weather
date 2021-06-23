import React from 'react';
import { YMaps, Map, ZoomControl } from "react-yandex-maps";
import { useSelector} from 'react-redux';

import './WeatherMap.scss';

function WeatherMap(props){ 
    const data = useSelector((state) => state.weather.data);
    
    const { lat, lon } = data.coord;

    return (
        <div className="weather-map">
            <YMaps>
                <Map
                    defaultState={{
                        center: [lat, lon],
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