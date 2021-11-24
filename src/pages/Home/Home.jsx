import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getWeather } from "../../api/openApi.js";
import { addCity } from "../../redux/weatherSlice";
import CityCart from "../../components/CityCart/CityCart";
import "./Home.scss";
import addIcon from "../../assets/add-icon.png";
import { Link } from "react-router-dom";

function Home() {
    const userCitiesId = useSelector((state) => state.weather.userCitiesId);
    const userCities = useSelector((state) => state.weather.userCities);
    const dispatch = useDispatch();

    useEffect(() => {
        userCitiesId
            .filter((id, idx) => !userCities[idx])
            .map((id) =>
                getWeather
                    .getCity(id)
                    .then((state) => {
                        dispatch(addCity(state));
                    })
                    .catch(console.error)
            );
    }, [dispatch, userCitiesId, userCities]);

    return (
        <div className="cart-grid">
            {userCities.map((city) => (
                <CityCart
                    key={city.id}
                    name={city.name}
                    icon={city.weather[0].icon}
                    temp={city.main.temp}
                    tempMin={city.main.temp_min}
                    tempMax={city.main.temp_max}
                    weatherStatus={city.weather[0].description}
                    link="/city"
                />
            ))}
            <Link to="/add-city" className="add-cart fadeInBottom">
                <img src={addIcon} alt="add icon" />
            </Link>
        </div>
    );
}

export default Home;
