import React from "react";
import { Link } from "react-router-dom";
import addIcon from "../../assets/add-icon.png";
import CityCart from "../../components/CityCart/CityCart";
import Weather from "../../store/Weather";
import "./Dashboard.sass";

interface Props{

}

interface State {
}

export default class Dashboard extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="cart-grid">
                {Weather.cities ? Weather.cities.map((cityItem) => {
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
                }) : ""}

                <Link to="/add-city" className="add-cart fadeInBottom">
                    <img src={addIcon} alt="add icon" />
                </Link>
            </div>
        )  
    }
}
