import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCityState, addCityDailyState } from "../../redux/weatherSlice";
import { getWeather } from "../../api/openApi.js";

import Main from "../../components/Main/Main";

import "./City.scss";

function City() {
    const cityId = "465543";
    const dataCity = useSelector((state) => state.weather.dataCity);
    const dispatch = useDispatch();

    useEffect(() => {
        getWeather
            .getCity(cityId)
            .then((state) => {
                dispatch(addCityState(state));
            })
            .catch(console.error);
    }, [dispatch]);

    useEffect(() => {
        if (!(Object.keys(dataCity).length === 0)) {
            const { lat, lon } = dataCity.coord;
            getWeather
                .getCityDaily(lat, lon)
                .then((state) => {
                    dispatch(addCityDailyState(state));
                })
                .catch(console.error);
        }
    }, [dispatch, dataCity]);

    return <Main />;
}

export default City;
