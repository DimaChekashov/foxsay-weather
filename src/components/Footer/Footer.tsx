import React from "react";
import "./Footer.sass";

interface Props {
}

interface State {
}

export default class Footer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="footer">
                <ul className="footer__list">
                    <li>
                        <a href="https://career.habr.com/foxsayjs" target="_blank" rel="noopener noreferrer">
                            DmitryChekashov
                        </a>
                    </li>
                    |
                    <li>
                        <a href="https://github.com/DimaChekashov" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}
