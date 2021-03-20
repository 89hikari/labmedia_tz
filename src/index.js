import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import 'font-awesome/css/font-awesome.css';

ReactDOM.render(<App />, document.getElementById("root"));