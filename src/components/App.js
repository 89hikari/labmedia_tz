import React, { Component } from "react";
import Header from './Header/Header'
import WhiteContainer from './WhiteContainer/WhiteContainer'
import '../styles/App.css';
import Requests from "./Requests/Requests";

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <WhiteContainer />
            </div>
        );
    }
}

export default App;