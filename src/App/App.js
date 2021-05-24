import { useEffect, useState } from "react";
import "./App.css";
import { Map, GoogleApiWrapper } from "google-maps-react";

import { getCity } from "../api/openApi.js";

function App(props) {
    const cityId = "465543";
    const [cityWeather, setCityWeather] = useState({});

    useEffect(() => {
        getCity(cityId).then(setCityWeather).catch(console.error);
    }, []);

    return (
        <div className="App">
            <h1>Hello {cityWeather.name}!</h1>
            <Map
                google={props.google}
                zoom={8}
                initialCenter={{
                    lat: 40.854885,
                    lng: -88.081807,
                }}
            ></Map>
        </div>
    );
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyCwm3DSlBLwoMrFgPniKHlxYXna3poxV6Y",
})(App);
