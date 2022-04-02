import React from "react";
import { Link } from "react-router-dom";
import { numTemp } from "../../utils/utils";
import backIcon from "../../assets/icon-back.svg";
import "./City.sass";
import getWeather from "../../api/openApi";
import WeatherMap from "../../components/WeatherMap/WeatherMap";
import WeatherDays from "../../components/WeatherDays/WeatherDays";

interface Props {
}

interface State {
    isLoaded: boolean,
    city: any
}

export default class City extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isLoaded: false,
            city: {}
        };
    }

    componentDidMount() {
        getWeather
            .getCity(465543)
            .then((city) => {
                this.setState({
                    city,
                    isLoaded: true
                })
            })
            .catch(console.error);
    }
    
    render() {
        const { city, isLoaded } = this.state;
        const { 
            main,
            wind, 
            name, 
            coord, 
            itemId, 
            weather, 
        } = city;

        if (!isLoaded) {
            return <div>Not Found</div>;
        }

        return (
            <div className="city-wrapper">
                <Link to="/" className="go-back">
                    <img src={backIcon} alt="Иконка назад" />
                </Link>
                <div className="city fadeInBottom">
                    <div className="city__top">
                        <div className="city__top-left">
                            <h3 className="city__temp">{numTemp(main.temp)}</h3>
                            <h4 className="city__status">
                                {weather[0].description}
                            </h4>
                            <ul className="city__temps">
                                <li>
                                    <span className="city__temps-label">
                                        Влага
                                    </span>
                                    <span className="city__temps-temp">
                                        {main.humidity}
                                        %
                                    </span>
                                </li>
                                <li>
                                    <span className="city__temps-label">
                                        Ветер
                                    </span>
                                    <span className="city__temps-temp">
                                        {wind.speed} 
                                        K/M
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <h2 className="city__name">{name}</h2>
                    </div>
                    <div className="city__map">
                        <WeatherMap cityCoord={{ lat: 55.3195, lon: 52.0694 }} />
                    </div>
                    <div className="city__days">
                        <WeatherDays
                            cityCoord={coord}
                            name={name}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
