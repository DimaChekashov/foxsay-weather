import { handleResponse, handleError } from "./apiUtils";

const KEY_ID = "b298c68afd6a947d0bef1b16adecf90f";

const instanceCurentWeather = "http://api.openweathermap.org/data/2.5/";

let API_KEY_CURENT = `&units=metric&lang=ru&appid=${KEY_ID}`;
let API_KEY_DAILY = `&exclude=minutely&units=metric&lang=ru&appid=${KEY_ID}`;
const WEATHER_CURRENT = `weather?id=`;
const WEATHER_DAILY = `onecall?`;
const LON = `lon=`;
const LAT = `lat=`;

export const getWeather = {
    getCity(cityId) {
        return fetch(
            `${
                instanceCurentWeather +
                WEATHER_CURRENT +
                cityId +
                API_KEY_CURENT
            }`
        )
            .then((response) => handleResponse(response))
            .catch(handleError);
    },
    getCityDaily(lat, lon) {
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
            .catch(handleError);
    },
};
