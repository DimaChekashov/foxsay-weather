import { makeAutoObservable } from "mobx";
import { City } from "../types/types";

class Weather {
    cities: City[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    addCity(data: City) {
        const idx = this.cities.findIndex(({ id }) => id === data.id);
        if (idx > -1) {
            this.cities[idx] = data;
        } else {
            this.cities.push(data);
        }
        localStorage.setItem("localCities", JSON.stringify(this.cities));
    }

    loadLocalCity(data: City[]) {
        this.cities = data;
    }
}

export default new Weather();
