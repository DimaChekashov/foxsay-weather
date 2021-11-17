import React from "react";
import "./CityCart.scss";

function CityCart() {
    return (
        <div className="city-cart">
            <h4 className="city-cart__name">Заинск</h4>
            <div className="city-cart__img">
                <img
                    src="https://openweathermap.org/img/wn/04d@2x.png"
                    alt="пасмурно"
                />
            </div>
            <h4 className="city-cart__temp">20°</h4>
            <ul className="city-cart__today">
                <li>
                    <span className="city-cart__today-label">Min</span>
                    <span className="city-cart__today-temp">15°</span>
                </li>
                <li>
                    <span className="city-cart__today-label">Max</span>
                    <span className="city-cart__today-temp">25°</span>
                </li>
            </ul>
        </div>
    );
}

export default CityCart;
