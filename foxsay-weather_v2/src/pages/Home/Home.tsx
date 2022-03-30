import React from "react";
import { observer } from "mobx-react";
import "./Home.sass";

interface Props {

}

interface State {
}

@observer
export default class Home extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>Home</div>
        )
    }
}
