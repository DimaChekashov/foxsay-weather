import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import { useSelector, useDispatch } from 'react-redux';
import { addState } from '../redux/weatherSlice'
import { getCity } from "../api/openApi.js";
import "./App.scss";

function App(props) {
    const cityId = "465543";
    const [loading, setLoading] = useState(false);
    const weatherState = useSelector((state) => state.weather.weatherState);
    const dispatch = useDispatch();

    useEffect(() => {
        getCity(cityId).then((state) => {
            dispatch(addState(state));
        }).catch(console.error);
    }, [dispatch]);

    return (
        <div className="app">
            <Header />
            <div className="container">
                <Main />
            </div>
            <Footer />
        </div>
    );
}

export default App;
