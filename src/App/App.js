import { useEffect, useState } from "react";
import "./App.css";

import { getCity } from "../api/openApi.js";

function App() {
    const cityId = "465543";
    const [cityWeather, setCityWeather] = useState({});

    useEffect(() => {
        getCity(cityId).then(setCityWeather).catch(console.error);
    }, []);

    return <div className="App">Hello {cityWeather.name}!</div>;
}

export default App;
