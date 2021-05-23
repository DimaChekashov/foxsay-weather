import { handleResponse, handleError } from "./apiUtils";
const keyId = "b298c68afd6a947d0bef1b16adecf90f";

export function getCity(cityId) {
    return fetch(
        `http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${keyId}`
    )
        .then((response) => handleResponse(response))
        .catch(handleError);
}
