import React from "react";
import { YMaps, Map, ZoomControl } from "react-yandex-maps";
import "./WeatherMap.sass";

interface Props {
    cityCoord: {
        lat: number;
        lon: number;
    }
}

interface State {
}

export default class WeatherMap extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="weather-map">
                <YMaps>
                    <Map
                        defaultState={{
                            center: [this.props.cityCoord.lat, this.props.cityCoord.lon],
                            controls: [],
                            zoom: 11,
                        }}
                        className="map"
                    >
                        <ZoomControl options={{ float: "right" }} />
                    </Map>
                </YMaps>
            </div>
        );
    }
}
