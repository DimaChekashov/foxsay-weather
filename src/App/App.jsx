import React from "react";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import "./App.scss";

function App(props) {
    return (
        <div className="app">
            <Header />
            <div className="container">
                <Main />
            </div>
            <Footer />
        </div>
    );
}

export default App;
