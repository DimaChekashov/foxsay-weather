import { makeAutoObservable } from "mobx";

class Weather {
    initialState = {
        dataCityDaily: {},
        userCities: [],
        userCitiesId: [465543, 523750],
    };

    constructor() {
        makeAutoObservable(this);
    }

    addCityDaily(cityDaily) {
        this.initialState.dataCityDaily = cityDaily;
    }

    addCity(city) {
        const idx = this.initialState.userCities.findIndex(
            ({ id }) => id === city.id
        );
        if (idx > -1) {
            this.initialState.userCities[idx] = city;
        } else {
            this.initialState.userCities.push(city);
        }
    }

    addCityId(id) {
        this.initialState.userCitiesId.push(id);
    }

    add() {
        this.initialState.userCitiesId.push(12121);
    }
}

export default new Weather();
