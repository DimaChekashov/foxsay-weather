import React from "react";
import { Link } from "react-router-dom";
import { numTemp } from "../../utils/utils";
import "./CityCart.sass";

interface Props {
    link: string;
    name: string;
    icon: string;
    weatherStatus: string;
    temp: number;
    tempMin: number;
    tempMax: number;
}

interface State {
}

export default class CityCart extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const { 
            link, 
            name, 
            icon, 
            temp, 
            tempMin, 
            tempMax, 
            weatherStatus 
        } = this.props;
        
        return (
            <Link to={link} className="city-cart fadeInBottom">
                <h4 className="city-cart__name">{name}</h4>
                <div className="city-cart__img">
                    <img
                        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                        alt={weatherStatus}
                    />
                </div>
                <h4 className="city-cart__temp">{numTemp(temp)}</h4>
                <ul className="city-cart__today">
                    <li>
                        <span className="city-cart__today-label">Min</span>
                        <span className="city-cart__today-temp">
                            {numTemp(tempMin)}
                        </span>
                    </li>
                    <li>
                        <span className="city-cart__today-label">Max</span>
                        <span className="city-cart__today-temp">
                            {numTemp(tempMax)}
                        </span>
                    </li>
                </ul>
            </Link>
        )
    }
}
