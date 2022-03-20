import React from 'react';
import Header from '../components/Header/Header';
import Home from '../pages/Home/Home';
import './App.sass';

export default class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Header />
                <Home />
            </div>
        )
    }
}