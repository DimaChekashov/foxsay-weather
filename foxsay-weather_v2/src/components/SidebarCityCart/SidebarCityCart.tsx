import React from "react";
import { Link } from "react-router-dom";
import { numTemp } from "../../utils/utils";
import "./SidebarCityCart.sass";

interface Props {
    link: string,
    name: string,
    icon: string,
    weatherStatus: string,
    temp: number,
    tempMin: number,
    tempMax: number,
    sidebarOn: () => void
}

interface State {

}

export default class SidebarCityCart extends React.Component<Props, State> {
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
            <Link className="sidebar-cart" to={link} onClick={this.props.sidebarOn}>
                <div className="sidebar-cart__img">
                    <img
                        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                        alt={weatherStatus}
                    />
                </div>
                <div className="sidebar-cart__content">
                    <h5 className="sidebar-cart__name">
                        {name}
                        :
                        <span>{numTemp(temp)}</span>
                    </h5>
                    <ul className="sidebar-cart__today">
                        <li>
                            <span className="sidebar-cart__today-label">Min:</span>
                            <span className="sidebar-cart__today-temp">
                                {numTemp(tempMin)}
                            </span>
                        </li>
                        <li>
                            <span className="sidebar-cart__today-label">Max:</span>
                            <span className="sidebar-cart__today-temp">
                                {numTemp(tempMax)}
                            </span>
                        </li>
                    </ul>
                </div>
            </Link>
        )
    }
}
