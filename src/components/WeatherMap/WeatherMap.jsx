import React from "react";
import { YMaps, Map, ZoomControl } from "react-yandex-maps";

import "./WeatherMap.scss";

function WeatherMap(props) {
    return (
        <div className="weather-map">
            <YMaps>
                <Map
                    defaultState={{
                        center: [52.4289, 55.7561],
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
