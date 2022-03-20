import React from 'react';
import { ITime } from '../../types/types';
import './Time.sass';

interface Props {

}

interface State {
    time: ITime;
}

export default class Time extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            time: {
                s: 0,
                m: 0,
                h: 0
            }
        }
    }

    componentDidMount = () => {
        setInterval(() => {
            const timeData = new Date();
            this.setState({
                time: {
                    s: timeData.getSeconds(),
                    m: timeData.getMinutes(),
                    h: timeData.getHours()
                }
            })
        }, 1000);
    }

    render() {
        let { h, m, s } = this.state.time;
        return (
            <div className="time">Время: <span className="time__frame">{`${h >= 10 ? h : "0" + h}:${m >= 10 ? m : "0" + m}:${s >= 10 ? s : "0" + s}`}</span></div>
        )
    }
}