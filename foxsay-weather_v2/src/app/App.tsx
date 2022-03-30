import React from "react";
import Header from "../components/Header/Header";
import Home from "../pages/Home/Home";
import Footer from "../components/Footer/Footer";
import "./App.sass";

interface Props {

}
export default class App extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="app">
                <Header />
                <Home />
                <Footer />
            </div>
        )
    }
}
