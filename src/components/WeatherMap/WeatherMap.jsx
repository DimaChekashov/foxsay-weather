import React from "react";
import { YMaps, Map, ZoomControl } from "react-yandex-maps";

import "./WeatherMap.scss";

function WeatherMap({ cityCoord }) {
    return (
        <div className="weather-map">
            <YMaps>
                <Map
                    defaultState={{
                        center: [cityCoord.lat, cityCoord.lon],
                        controls: [],
                        zoom: 11,
                    }}
                    className="map"
                >
                    <ZoomControl options={{ float: "right" }} />
                </Map>
            </YMaps>
        </div>
    );
}

export default WeatherMap;
