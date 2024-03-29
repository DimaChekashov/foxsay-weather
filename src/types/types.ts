export interface ITime {
    s: number;
    m: number;
    h: number;
}

export interface City {
    base: string;
    clouds: {
        all: number;
    };
    cod: number;
    coord: CityCoord;
    dt: number;
    id: number;
    main: {
        feels_like: number;
        humidity: number;
        pressure: number;
        temp: number;
        temp_max: number;
        temp_min: number;
    };
    name: string;
    sys: {
        country: string;
        id: number;
        sunrise: number;
        sunset: number;
        type: number;
    };
    timezone: number;
    visibility: number;
    weather: {
        description: string;
        icon: string;
        id: number;
        main: string;
    }[];
    wind: {
        deg: number;
        gust: number;
        speed: number;
    };
}

export interface CityDaily {
    current: object;
    daily: Daily[];
    hourly: [];
    lat: number;
    lon: number;
    timezone: string;
    timezone_offset: number;
}

export interface CityCoord {
    lat: number;
    lon: number;
}

export interface Daily {
    temp: {
        day: number;
    }
    weather: [
        {
            icon: string;
        }
    ]
}
