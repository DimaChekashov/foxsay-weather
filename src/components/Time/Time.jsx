import React from 'react';
import { useState } from 'react';

import './Time.scss';

function Time() {
    let timeData = new Date();
    const [time, setTime] = useState({ h: timeData.getHours(), m: timeData.getMinutes(), s: timeData.getSeconds() })

    setTimeout(() => setTime({ h: timeData.getHours(), m: timeData.getMinutes(), s: timeData.getSeconds() }), 1000);

    const { h, m, s } = time;

    return (
        <div className="time">Время: <span className="time__frame">{`${h >= 10 ? h : "0" + h}:${m >= 10 ? m : "0" + m}:${s >= 10 ? s : "0" + s}`}</span></div>
    )
}

export default Time;