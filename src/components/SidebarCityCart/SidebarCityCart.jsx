import React from "react";
import "./SidebarCityCart.scss";

function SidebarCityCart() {
    return (
        <div className="sidebar-cart">
            <div className="city-cart__img">
                <img
                    src="https://openweathermap.org/img/wn/04d@2x.png"
                    alt="пасмурно"
                />
            </div>
            <div className="sidebar-cart__content">
                <h5 className="city-cart__name">
                    Заинск: <span>20°</span>
                </h5>
                <ul className="city-cart__today">
                    <li>
                        <span className="city-cart__today-label">Min:</span>
                        <span className="city-cart__today-temp">15°</span>
                    </li>
                    <li>
                        <span className="city-cart__today-label">Max:</span>
                        <span className="city-cart__today-temp">25°</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SidebarCityCart;
