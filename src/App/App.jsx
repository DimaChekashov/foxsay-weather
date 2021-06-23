import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import { useSelector, useDispatch } from 'react-redux';
import { addCityState, addCityDailyState } from '../redux/weatherSlice'
import { getWeather } from "../api/openApi.js";
import Loader from '../components/Loader/Loader';
import "./App.scss";

function App(props) {
    const cityId = "465543";
    const dataCity = useSelector((state) => state.weather.dataCity);
    const dataCityDaily = useSelector((state) => state.weather.dataCityDaily);
    const dispatch = useDispatch();

    useEffect(() => {
        getWeather.getCity(cityId).then((state) => {
            dispatch(addCityState(state));
        }).catch(console.error);
    }, [dispatch]);

    useEffect(() => {
        if(!(Object.keys(dataCity).length === 0)) {
            const {lat, lon} = dataCity.coord;
            getWeather.getCityDaily(lat, lon).then((state) => {
                dispatch(addCityDailyState(state));
            }).catch(console.error);
        }
    }, [dispatch, dataCity]);

    if(Object.keys(dataCity).length === 0) {
        return <Loader/>;
    }  else {
    }

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
