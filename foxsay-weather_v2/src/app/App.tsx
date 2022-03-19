import React from 'react';
import Header from '../components/Header/Header';
import './App.sass';

export default class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Header />
            </div>
        )
    }
}