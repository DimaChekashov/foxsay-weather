import React from "react";
import { ITime } from "../../types/types";
import "./Time.sass";

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

    componentDidMount() {
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

    private isTen = (num: number) => (num >= 10 ? num : `0${num}`);

    render() {
        const { h, m, s } = this.state.time;
        return (
            <div className="time">
                Время:&nbsp;
                <span className="time__frame">{`${this.isTen(h)}:${this.isTen(m)}:${this.isTen(s)}`}</span>
            </div>
        )
    }
}
