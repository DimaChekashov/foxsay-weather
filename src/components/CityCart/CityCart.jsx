import React from "react";
import "./CityCart.scss";
import { numTemp } from "../../utils/utils";
import { Link } from "react-router-dom";

function CityCart({ name, weatherStatus, icon, temp, tempMin, tempMax, link }) {
    return (
        <Link to={link} className="city-cart">
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
    );
}

export default CityCart;
