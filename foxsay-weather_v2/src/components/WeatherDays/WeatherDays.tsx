import React from "react";
import getWeather from "../../api/openApi";
import { numTemp } from "../../utils/utils";
import "./WeatherDays.sass";

interface Props {
    cityCoord: any;
    name: string;
}

interface State {
    isLoaded: boolean,
    cityDaily: {
        lat: number,
        lon: number,
        daily: any
    }
}

export default class WeatherDays extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isLoaded: false,
            cityDaily: {
                lat: 0,
                lon: 0,
                daily: {}
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
                <div className="days__item">
                    <h3 className="days__item-week">Понедельник</h3>
                    <div className="days__item-img">
                        <img
                            src={`https://openweathermap.org/img/wn/${daily[0].weather[0].icon}@2x.png`}
                            alt="test"
                        />
                    </div>
                    <h4 className="days__item-temp">
                        {numTemp(daily[0].temp.day)}
                    </h4>
                </div>
                <div className="days__item">
                    <h3 className="days__item-week">Вторник</h3>
                    <div className="days__item-img">
                        <img
                            src={`https://openweathermap.org/img/wn/${daily[1].weather[0].icon}@2x.png`}
                            alt="test"
                        />
                    </div>
                    <h4 className="days__item-temp">
                        {numTemp(daily[1].temp.day)}
                    </h4>
                </div>
                <div className="days__item">
                    <h3 className="days__item-week">Среда</h3>
                    <div className="days__item-img">
                        <img
                            src={`https://openweathermap.org/img/wn/${daily[2].weather[0].icon}@2x.png`}
                            alt="test"
                        />
                    </div>
                    <h4 className="days__item-temp">
                        {numTemp(daily[2].temp.day)}
                    </h4>
                </div>
                <div className="days__item">
                    <h3 className="days__item-week">Четверг</h3>
                    <div className="days__item-img">
                        <img
                            src={`https://openweathermap.org/img/wn/${daily[3].weather[0].icon}@2x.png`}
                            alt="test"
                        />
                    </div>
                    <h4 className="days__item-temp">
                        {numTemp(daily[3].temp.day)}
                    </h4>
                </div>
                <div className="days__item">
                    <h3 className="days__item-week">Пятница</h3>
                    <div className="days__item-img">
                        <img
                            src={`https://openweathermap.org/img/wn/${daily[4].weather[0].icon}@2x.png`}
                            alt="test"
                        />
                    </div>
                    <h4 className="days__item-temp">
                        {numTemp(daily[4].temp.day)}
                    </h4>
                </div>
            </div>
        );
    }
}
