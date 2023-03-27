import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import addIcon from "../../assets/add-icon.png";
import CityCart from "../../components/CityCart/CityCart";
import { ROUTES } from "../../const/routes";
import Weather from "../../store/Weather";
import "./Dashboard.sass";

interface Props{

}

interface State {
}

@observer 
export default class Dashboard extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { }
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
                            link={`${ROUTES.CITY}/${cityItem.id}`}
                        />
                    );
                }) : ""}

                <Link to={ROUTES.ADD_CITY} className="add-cart zoomOutIn">
                    <img src={addIcon} alt="add icon" />
                </Link>
            </div>
        )  
    }
}
