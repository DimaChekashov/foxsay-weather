import React from "react";
import { useParams } from "react-router-dom";
import { numTemp } from "../../utils/utils";
import getWeather from "../../api/openApi";
import WeatherMap from "../../components/WeatherMap/WeatherMap";
import WeatherDays from "../../components/WeatherDays/WeatherDays";
import Weather from "../../store/Weather";
import franceImg from "../../assets/towns/france.svg";
import qatarImg from "../../assets/towns/qatar.svg";
import rabatImg from "../../assets/towns/rabat.svg";
import tunisImg from "../../assets/towns/tunis.svg";
import { City as CityModel } from "../../types/types";
import "./City.sass";

function withParams(Component: React.ElementType) {
    // eslint-disable-next-line
    return (props: any) => <Component {...props} params={useParams()} />
}

interface Props {
    params: {
        cityId: number;
    };
}

interface State {
    loading: boolean;
    city?: CityModel;
}

class City extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            loading: false
        };
    }

    componentDidMount() {
        this.addNewCity();
    }

    componentDidUpdate(prevProps: Props, prevState: State) {
        const { cityId } = this.props.params;

        if (cityId === prevProps.params.cityId) return;

        const city = Weather.cities.find(({ id }) => id === cityId);

        if (city) {
            // eslint-disable-next-line react/no-did-update-set-state
            this.setState({ city });
        } else {
            this.addNewCity();
        }
    }

    addNewCity() {
        this.setState({ loading: true });

        getWeather
            .getCity(this.props.params.cityId)
            .then((city) => {
                this.setState({
                    city,
                    loading: false
                });
                Weather.addCity(city);
            })
            .catch(console.error);
    }

    getRandomTownImg = () => {
        const images = [franceImg, qatarImg, rabatImg, tunisImg];
        return images[Math.floor(Math.random() * images.length)];
    }
    
    render() {
        const { city, loading } = this.state;

        if (loading) {
            return <div>Loading...</div>;
        }

        if (!city) {
            return <div>Not Found</div>;
        }

        const { 
            main,
            wind, 
            name, 
            coord,
            weather, 
        } = city;

        return (
            <div className="city-wrapper">
                <div className="city fadeInBottom">
                    <div className="city__top" style={{ backgroundImage: `url(${this.getRandomTownImg()})` }}>
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
