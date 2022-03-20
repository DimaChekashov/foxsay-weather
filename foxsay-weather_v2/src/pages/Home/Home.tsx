import React from 'react';
import { getWeather } from '../../api/openApi';
import './Home.sass';
import weather from '../../store/Weather';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

interface Props {

}

interface State {
    userCitiesId: number[];
    userCities: any;
}

@observer
export default class Home extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            userCitiesId: [...weather.initialState.userCitiesId],
            userCities: [...weather.initialState.userCities],
        }
    }

    componentDidMount() {
        this.state.userCitiesId
            // .filter((id, idx) => !userCities[idx])
            .map((id) =>
                getWeather
                    .getCity(id)
                    .then((state) => {
                        weather.addCity(state);
                    })
                    .catch(console.error)
            );
    }

    render() {
        return (
            <div onClick={() => {
                console.log(weather);
                weather.add();
            }}>Home {weather.initialState.userCitiesId}</div>
        )
    }
}
