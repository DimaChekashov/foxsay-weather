import React from "react";
import { observer } from "mobx-react";
import getWeather from "../../api/openApi";
import "./Home.sass";
import CityCart from "../../components/CityCart/CityCart";

interface Props {

}

interface State {
    isLoaded: boolean,
    city: any,
}

@observer
export default class Home extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isLoaded: false,
            city: {},
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
            <div>
                <CityCart
                    key={city.id}
                    name={city.name}
                    icon={city.weather[0].icon}
                    temp={city.main.temp}
                    tempMin={city.main.temp_min}
                    tempMax={city.main.temp_max}
                    weatherStatus={city.weather[0].description}
                    // link={`/city/${index}`}
                    link={`/city/${1}`}
                />
            </div>
        )  
    }
}
