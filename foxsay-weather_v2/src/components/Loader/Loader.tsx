import React from "react";
import "./Loader.sass";

interface Props {
}

interface State {
}

export default class Loader extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="loader">
                <div className="loader-spin" />
            </div>
        )
    }
}
