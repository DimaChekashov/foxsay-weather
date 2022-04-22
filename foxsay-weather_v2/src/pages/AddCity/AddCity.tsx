import React from "react";
import searchIcon from "../../assets/search-icon.svg";
import cities from "../../db/city-database";
import "./AddCity.sass";

interface Props {

}

interface State {
    searchInput: string
}

export default class AddCity extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            searchInput: ""
        }
    }

    onSearch() {
        this.setState({
            searchInput: ""
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
                        onChange={(e) => this.setState({
                            searchInput: e.target.value
                        })}
                    />
                    <button className="search-city__btn" onClick={this.onSearch}>
                        <img src={searchIcon} alt="search icon" />
                    </button>
                </div>

                <ul className="city-list">
                    {cities.map((city, i) => (
                        <li className="city-list__item" key={city.id}>
                            <div className="city-list__item-count">{i + 1}</div>
                            <div className="city-list__item-text">{city.name}</div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
