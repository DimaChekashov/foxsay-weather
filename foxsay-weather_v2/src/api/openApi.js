import { handleResponse, handleError } from "./apiUtils";

const KEY_ID = "b298c68afd6a947d0bef1b16adecf90f";

const instanceCurentWeather = "http://api.openweathermap.org/data/2.5/";

let API_KEY_CURENT = `&units=metric&lang=ru&appid=${KEY_ID}`;
let API_KEY_DAILY = `&exclude=minutely&units=metric&lang=ru&appid=${KEY_ID}`;
const WEATHER_CURRENT = `weather?id=`;
const WEATHER_BY_NAME_CURRENT = `weather?q=`;
const WEATHER_DAILY = `onecall?`;
const LON = `lon=`;
const LAT = `lat=`;

export const getWeather = {
    getCity(cityId) {
        let city = localStorage.getItem(cityId);
        if (city) {
            return new Promise((res) => res(JSON.parse(city)));
        }

        return fetch(
            `${
                instanceCurentWeather +
                WEATHER_CURRENT +
                cityId +
                API_KEY_CURENT
            }`
        )
            .then((response) => handleResponse(response))
            .then((city) => {
                localStorage.setItem(cityId, JSON.stringify(city));
                return city;
            })
            .catch(handleError);
    },
    getCityByName(cityName) {
        let city = localStorage.getItem(cityName);
        if (city) {
            return new Promise((res) => res(JSON.parse(city)));
        }

        return fetch(
            `${
                instanceCurentWeather +
                WEATHER_BY_NAME_CURRENT +
                cityName +
                API_KEY_CURENT
            }`
        )
            .then((response) => handleResponse(response))
            .then((city) => {
                localStorage.setItem(cityName, JSON.stringify(city));
                return city;
            })
            .catch(handleError);
    },
    getCityDaily(lat, lon, name) {
        let cityDaily = localStorage.getItem(name);
        if (cityDaily) {
            return new Promise((res) => res(JSON.parse(cityDaily)));
        }

        if (!lat || !lon) {
            return;
        }
        return fetch(
            `${
                instanceCurentWeather +
                WEATHER_DAILY +
                LAT +
                lat +
                "&" +
                LON +
                lon +
                API_KEY_DAILY
            }`
        )
            .then((response) => handleResponse(response))
            .then((cityDaily) => {
                localStorage.setItem(name, JSON.stringify(cityDaily));
                return cityDaily;
            })
            .catch(handleError);
    },
};
