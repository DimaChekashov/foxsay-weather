import { useEffect, useState } from "react";
import { YMaps, Map, ZoomControl, Placemark } from "react-yandex-maps";
import "./App.css";

import { getCity } from "../api/openApi.js";

function App(props) {
    const cityId = "465543";
    const [cityWeather, setCityWeather] = useState({});

    useEffect(() => {
        getCity(cityId).then(setCityWeather).catch(console.error);
    }, []);

    const { coord, name } = cityWeather;
    console.log(coord);

    return (
        <div className="App">
            <h1>Hello {name}!</h1>
            <YMaps>
                <Map
                    defaultState={{
                        center: [55.3195, 52.0694],
                        controls: [],
                        zoom: 11,
                    }}
                >
                    <ZoomControl options={{ float: "right" }} />
                </Map>
            </YMaps>
        </div>
    );
}

export default App;
