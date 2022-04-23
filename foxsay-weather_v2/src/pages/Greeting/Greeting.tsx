import React from "react";
import { Link } from "react-router-dom";

import "./Greeting.sass";

interface Props {

}

interface State {
    
}

export default class Greeting extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="greeting">
                <h2 className="greeting__title">Приветствую!</h2>
                <p className="greeting__desc">
                    На этом сайте вы сможете узнать погоду в своем родном городе и не только.
                    <br />
                    Нажми на кнопку ниже для выбора города
                </p>
                <Link to="/add-city" className="greeting__btn">Выбор города</Link>
            </div>
        )
    }
}
