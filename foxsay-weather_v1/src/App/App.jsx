import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AddCity from "../pages/AddCity/AddCity";
import Home from "../pages/Home/Home";
import City from "../pages/City/City";

import "./App.scss";

function App() {
    return (
        <div className="app">
            <Header />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="add-city" element={<AddCity />} />
                    <Route path="city" element={<City />}>
                        <Route path=":itemId" element={<City />} />
                    </Route>
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
