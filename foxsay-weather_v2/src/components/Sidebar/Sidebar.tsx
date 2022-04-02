import React from "react";
import { Link } from "react-router-dom";
import getWeather from "../../api/openApi";
import addIcon from "../../assets/add-icon.png";
import SidebarCityCart from "../SidebarCityCart/SidebarCityCart";
import "./Sidebar.sass";

interface Props {
    open: boolean;
    onOpen: () => void;
}

interface State {
    isLoaded: boolean,
    city: any
}

export default class Sidebar extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isLoaded: false,
            city: {}
        }
    }

    componentDidMount() {
        getWeather
            .getCity(465543)
            .then((city) => {
                this.setState({
                    city,
                    isLoaded: true
                })
            })
            .catch(console.error);
    }

    render() {
        const { city, isLoaded } = this.state;

        if (!isLoaded) {
            return <div>Empty city</div>;
        }

        return (
            <>
                <div className={`sidebar ${this.props.open ? "active" : ""}`}>
                    <div className="sidebar__header">
                        <button
                            type="button"
                            className="sidebar__menu-btn"
                            onClick={this.props.onOpen}
                        >
                            <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 75V125H500V75H0ZM0 225V275H500V225H0ZM0 375V425H500V375H0Z" fill="white" />
                            </svg>
                        </button>
                        <h3 className="sidebar__title">FoxSay Weather</h3>
                    </div>
                    <SidebarCityCart
                        key={city.id}
                        name={city.name}
                        icon={city.weather[0].icon}
                        temp={city.main.temp}
                        tempMin={city.main.temp_min}
                        tempMax={city.main.temp_max}
                        weatherStatus={city.weather[0].description}
                        // link={`/city/${index}`}
                        link={`/city/${1}`}
                        sidebarOn={this.props.onOpen}
                    />
                    <Link
                        to="/add-city"
                        onClick={this.props.onOpen}
                        className="sidebar__add-cart"
                    >
                        <img src={addIcon} alt="add icon" />
                    </Link>
                </div>
                <div
                    className={`sidebar-overflow ${this.props.open ? "active" : ""}`}
                    onClick={this.props.onOpen}
                    onKeyDown={this.props.onOpen}
                />
            </>
        )
    }
}
