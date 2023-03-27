import React from "react";
import getWeather from "../../api/openApi";
import { CityCoord, Daily } from "../../types/types";
import { numTemp } from "../../utils/utils";
import "./WeatherDays.sass";

const dayOfWeek = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница"];

interface Props {
    cityCoord: CityCoord;
    name: string;
}

interface State {
    isLoaded: boolean;
    cityDaily: {
        lat: number;
        lon: number;
        daily: Daily[];
    };
}

export default class WeatherDays extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isLoaded: false,
            cityDaily: {
                lat: 0,
                lon: 0,
                daily: []
            }
        };
    }

    componentDidMount() {
        getWeather
            .getCityDaily(this.props.cityCoord.lat, this.props.cityCoord.lon, this.props.name)
            .then((cityDaily) => {
                this.setState({
                    cityDaily,
                    isLoaded: true
                })
            })
            .catch(console.error);
    }

    render() {
        const { cityDaily, isLoaded } = this.state;
        const { daily } = cityDaily;

        if (!isLoaded) {
            return <div>Loading</div>;
        }

        return (
            <div className="days">
                {daily.slice(0, 5).map((day, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <div className="days__item" key={index}>
                        <h3 className="days__item-week">{dayOfWeek[index]}</h3>
                        <div className="days__item-img">
                            <img
                                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                                alt="test"
                            />
                        </div>
                        <h4 className="days__item-temp">
                            {numTemp(day.temp.day)}
                        </h4>
                    </div>
                ))}
            </div>
        );
    }
}
