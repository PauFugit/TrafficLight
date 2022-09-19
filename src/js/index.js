//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";


//import your own components
import Home from "./component/home.jsx";
import TrafficLight from "./component/TrafficLight.jsx";


//render your react application
ReactDOM.render(<TrafficLight />, document.querySelector("#app"));
