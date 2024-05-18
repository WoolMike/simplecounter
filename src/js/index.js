//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application

let contador = 0


function renderizado ( ) {
     contador = contador + 1
     ReactDOM.render(<Home seconds={contador} />, document.querySelector("#app"));
} 

setInterval(renderizado, 1000)