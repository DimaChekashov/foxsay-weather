import { makeAutoObservable } from "mobx";
import { City } from "../types/types";

class Weather {
    citiesId: number[] = [];

    cities: City[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    addId = (id: number) => this.citiesId.push(id);

    addCity = (data: City) => {
        const idx = this.cities.findIndex(({ id }) => id === data.id);
        if (idx > -1) {
            this.cities[idx] = data;
        } else {
            this.cities.push(data);
        }
        localStorage.setItem("localCities", JSON.stringify(this.cities));
    }

    loadLocalCity = (data: City[]) => {
        console.log(data)
        this.cities = data;
    }
}

export default new Weather();
