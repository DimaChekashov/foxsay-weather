import { makeAutoObservable } from "mobx";

class Weather {
    citiesId = [];

    cities = [];

    constructor() {
        makeAutoObservable(this);
    }

    addId = (id) => this.citiesId.push(id);

    addCity = (data) => {
        const idx = this.cities.findIndex(({ id }) => id === data.id);
        if (idx > -1) {
            this.cities[idx] = data;
        } else {
            this.cities.push(data);
        }
    }
}

export default new Weather();
