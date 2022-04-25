import React from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import getWeather from "../../api/openApi";
import addIcon from "../../assets/add-icon.png";
import CityCart from "../../components/CityCart/CityCart";
import Weather from "../../store/Weather";
import Loader from "../../components/Loader/Loader";
import "./Dashboard.sass";

interface Props{

}

interface State {
    isLoaded: boolean,
    city: any
}

@observer export default class Dashboard extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isLoaded: false,
            city: {}
        }
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
            
        console.log(Weather.cities[0].name);
    }

    render() {
        const { city, isLoaded } = this.state;

        if (!isLoaded) {
            return <Loader />;
        }

        return (
            <div className="cart-grid">
                {Weather.cities.map((cityItem) => {
                    return (
                        <CityCart
                            key={cityItem.id}
                            name={cityItem.name}
                            icon={cityItem.weather[0].icon}
                            temp={cityItem.main.temp}
                            tempMin={cityItem.main.temp_min}
                            tempMax={cityItem.main.temp_max}
                            weatherStatus={cityItem.weather[0].description}
                            link={`/city/${cityItem.id}`}
                        />
                    );
                })}
                <Link to="/add-city" className="add-cart fadeInBottom">
                    <img src={addIcon} alt="add icon" />
                </Link>
            </div>
        )  
    }
}
