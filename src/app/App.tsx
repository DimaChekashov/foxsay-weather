import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import Dashboard from "../pages/Dashboard/Dashboard";
import AddCity from "../pages/AddCity/AddCity";
import Footer from "../components/Footer/Footer";
import City from "../pages/City/City";
import Greeting from "../pages/Greeting/Greeting";
import { ROUTES } from "../const/routes";
import Weather from "../store/Weather";
import "./App.sass";

interface Props {

}

export default class App extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        const cities = localStorage.getItem("localCities") as string;
        Weather.loadLocalCity(JSON.parse(cities));
    }

    render() {
        return (
            <div className="app">
                <Header />
                <div className="container">
                    <Routes>
                        <Route path={ROUTES.MAIN_PAGE} element={<Greeting />} />
                        <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
                        <Route path={ROUTES.ADD_CITY} element={<AddCity />} />
                        <Route path={ROUTES.CITY}>
                            <Route path=":itemId" element={<City />} />
                        </Route>
                    </Routes>
                </div>
                <Footer />
            </div>
        )
    }
}
