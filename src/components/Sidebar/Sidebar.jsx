import React from "react";
import SidebarCityCart from "../SidebarCityCart/SidebarCityCart";
import { useSelector } from "react-redux";
import "./Sidebar.scss";
import addIcon from "../../assets/add-icon.png";
import { Link } from "react-router-dom";

function Sidebar({ open, onOpen }) {
    const userCities = useSelector((state) => state.weather.userCities);

    return (
        <>
            <div className={`sidebar ${open ? "active" : ""}`}>
                <div className="sidebar__header">
                    <button
                        className="menu-btn menu-btn_sidebar"
                        onClick={onOpen}
                    >
                        <svg
                            viewBox="0 0 500 500"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0 75V125H500V75H0ZM0 225V275H500V225H0ZM0 375V425H500V375H0Z"
                                fill="white"
                            />
                        </svg>
                    </button>
                    <h3 className="sidebar-title">FoxSay Weather</h3>
                </div>
                {userCities
                    ? userCities.map((city) => (
                          <SidebarCityCart
                              key={city.id}
                              name={city.name}
                              icon={city.weather[0].icon}
                              temp={city.main.temp}
                              tempMin={city.main.temp_min}
                              tempMax={city.main.temp_max}
                              weatherStatus={city.weather[0].description}
                          />
                      ))
                    : "Loading"}
                <Link
                    to="/add-city"
                    onClick={onOpen}
                    className="sidebar-add-cart"
                >
                    <img src={addIcon} alt="add icon" />
                </Link>
            </div>
            <div
                className={`sidebar-overflow ${open ? "overflow-active" : ""}`}
                onClick={onOpen}
            />
        </>
    );
}

export default Sidebar;
