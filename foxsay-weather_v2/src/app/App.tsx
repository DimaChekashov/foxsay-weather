import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import Home from "../pages/Home/Home";
import AddCity from "../pages/AddCity/AddCity";
import Footer from "../components/Footer/Footer";
import "./App.sass";
import City from "../pages/City/City";

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
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="add-city" element={<AddCity />} />
                        <Route path="city">
                            <Route path=":itemId" element={<City />} />
                        </Route>
                    </Routes>
                </div>
                <Footer />
            </div>
        )
    }
}
