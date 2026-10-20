import React, { use, useState } from "react";
import './index.css';
import CityComponents from "./components/CityComponent.jsx";

function App (){

    const [City, setCity] = useState('')
    const [weather,setWeather] = useState()
    fetchWeather=()=>{
        event.preventDefault();
        
    }
    return(
        <div className="Containe">
            <span className="AppLabel">React Weather App</span>
            <CityComponents setCity={setCity}/>
        </div>
        
    );
}

export default App;