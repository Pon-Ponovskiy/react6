import React from "react";
import '.index.css';
import CityComponents from "./components/CityComponent.jsx";

function App (){



    return(
        <div className="Containe">
            <span className="AppLabel">React Weather App</span>
            <CityComponents />
        </div>
        
    );
}