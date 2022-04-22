import React from "react";
import searchIcon from "../../assets/search-icon.svg";
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
                    <li className="city-list__item">
                        <div className="city-list__item-count">1</div>
                        <div className="city-list__item-text">Zainsk</div>
                    </li>
                    <li className="city-list__item">
                        <div className="city-list__item-count">2</div>
                        <div className="city-list__item-text">Naberezhnye chelny</div>
                    </li>
                </ul>
            </div>
        )
    }
}
