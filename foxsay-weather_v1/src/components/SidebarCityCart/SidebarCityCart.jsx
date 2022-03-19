import React from "react";
import { Link } from "react-router-dom";
import { numTemp } from "../../utils/utils";
import "./SidebarCityCart.scss";

function SidebarCityCart({
    name,
    weatherStatus,
    icon,
    temp,
    tempMin,
    tempMax,
    link,
    sidebarOn,
}) {
    return (
        <Link className="sidebar-cart" to={link} onClick={sidebarOn}>
            <div className="city-cart__img">
                <img
                    src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                    alt={weatherStatus}
                />
            </div>
            <div className="sidebar-cart__content">
                <h5 className="city-cart__name">
                    {name}: <span>{numTemp(temp)}</span>
                </h5>
                <ul className="city-cart__today">
                    <li>
                        <span className="city-cart__today-label">Min:</span>
                        <span className="city-cart__today-temp">
                            {numTemp(tempMin)}
                        </span>
                    </li>
                    <li>
                        <span className="city-cart__today-label">Max:</span>
                        <span className="city-cart__today-temp">
                            {numTemp(tempMax)}
                        </span>
                    </li>
                </ul>
            </div>
        </Link>
    );
}

export default SidebarCityCart;