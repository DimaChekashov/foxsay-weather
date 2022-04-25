import React from "react";
import { Link, useParams } from "react-router-dom";
import { observer } from "mobx-react";
import { numTemp } from "../../utils/utils";
import backIcon from "../../assets/icon-back.svg";
import getWeather from "../../api/openApi";
import WeatherMap from "../../components/WeatherMap/WeatherMap";
import WeatherDays from "../../components/WeatherDays/WeatherDays";
import Weather from "../../store/Weather";
import "./City.sass";

function withParams(Component: React.ElementType) {
    // eslint-disable-next-line
    return (props: any) => <Component {...props} params={useParams()} />
}

interface Props {
    params: any
}

interface State {
    isLoaded: boolean,
    city: any
}

class City extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isLoaded: false,
            city: {}
        };
    }

    componentDidMount() {
        Weather.addId(this.props.params.itemId);

        getWeather
            .getCity(this.props.params.itemId)
            .then((city) => {
                this.setState({
                    city,
                    isLoaded: true
                });
                Weather.addCity(city);
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
                <Link to="/dashboard" className="go-back">
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
                        <WeatherMap cityCoord={{ lat: coord.lat, lon: coord.lon }} />
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

export default withParams(City);
