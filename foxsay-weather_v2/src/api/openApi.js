import { handleResponse, handleError } from "./apiUtils";

const KEY_ID = "b298c68afd6a947d0bef1b16adecf90f";

const instanceCurentWeather = "http://api.openweathermap.org/data/2.5/";

const API_KEY_CURENT = `&units=metric&lang=ru&appid=${KEY_ID}`;
const API_KEY_DAILY = `&exclude=minutely&units=metric&lang=ru&appid=${KEY_ID}`;
const WEATHER_CURRENT = "weather?id=";
const WEATHER_BY_NAME_CURRENT = "weather?q=";
const WEATHER_DAILY = "onecall?";
const LON = "lon=";
const LAT = "lat=";

const getWeather = {
    getCity(cityId) {
        const city = localStorage.getItem(cityId);
        if (city) {
            // eslint-disable-next-line
            return new Promise((res) => res(JSON.parse(city)));
        }

        return fetch(
            `${
                instanceCurentWeather
                + WEATHER_CURRENT
                + cityId
                + API_KEY_CURENT
            }`
        )
            .then((response) => handleResponse(response))
            .then((cityItem) => {
                localStorage.setItem(cityId, JSON.stringify(cityItem));
                return cityItem;
            })
            .catch(handleError);
    },
    getCityByName(cityName) {
        const city = localStorage.getItem(cityName);
        if (city) {
            // eslint-disable-next-line
            return new Promise((res) => res(JSON.parse(city)));
        }

        return fetch(
            `${
                instanceCurentWeather
                + WEATHER_BY_NAME_CURRENT
                + cityName
                + API_KEY_CURENT
            }`
        )
            .then((response) => handleResponse(response))
            .then((cityItem) => {
                localStorage.setItem(cityName, JSON.stringify(cityItem));
                return cityItem;
            })
            .catch(handleError);
    },
    getCityDaily(lat, lon, name) {
        const cityDaily = localStorage.getItem(name);
        if (cityDaily) {
            // eslint-disable-next-line
            return new Promise((res) => res(JSON.parse(cityDaily)));
        }
        
        return fetch(
            `${
                instanceCurentWeather
                + WEATHER_DAILY
                + LAT
                + lat
            }"&"${
                LON
                + lon
                + API_KEY_DAILY
            }`
        )
            .then((response) => handleResponse(response))
            .then((cityDailyItem) => {
                localStorage.setItem(name, JSON.stringify(cityDailyItem));
                return cityDailyItem;
            })
            .catch(handleError);
    },
};

export default getWeather;
