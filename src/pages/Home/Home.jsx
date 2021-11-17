import React from "react";
import CityCart from "../../components/CityCart/CityCart";
import "./Home.scss";
import addIcon from "../../assets/add-icon.png";

function Home() {
    return (
        <div className="cart-grid">
            <CityCart />
            <button className="add-cart">
                <img src={addIcon} alt="add icon" />
            </button>
        </div>
    );
}

export default Home;
