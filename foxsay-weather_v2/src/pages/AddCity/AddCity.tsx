import React from "react";
import { Link } from "react-router-dom";
import searchIcon from "../../assets/search-icon.svg";
import cities from "../../db/city-database";
import "./AddCity.sass";

interface Props {

}

interface State {
    searchInput: string,
    cities: { id: number, name: string }[]
}

export default class AddCity extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            cities: [],
            searchInput: ""
        }
    }

    componentDidMount() {
        this.setState({
           cities
        })
    }
    
    onSearch = () => {
        const filterdCity = cities.filter((city) => {
            return city.name.includes(this.state.searchInput);
        })
        
        this.setState({
            searchInput: "",
            cities: filterdCity
        });
    }

    render() {
        return (
            <div className="search-city-wrapper">
                <div className="search-city">
                    <input
                        className="search-city__input"
                        placeholder="Найти город..."
                        value={this.state.searchInput}
                        onChange={(event) => this.setState({
                            searchInput: event.target.value
                        })}
                    />
                    <button className="search-city__btn" onClick={this.onSearch}>
                        <img src={searchIcon} alt="search icon" />
                    </button>
                </div>

                <ul className="city-list">
                    {this.state.cities.map((city, i) => (
                        <li className="city-list__item" key={city.id}>
                            <div className="city-list__item-count">{i + 1}</div>
                            <Link to={`/city/${city.id}`} className="city-list__item-text">
                                {city.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
