import React from "react";
import perfect_day from '../assets/icons/perfect-day.svg'


function CityComponents ({setCity}){


    return(
        <>
            <img className="WelcomeLogo" src={perfect_day}/>
            <span className="ChooseCityLabel">Find Weather of your city</span>
            <form className="SearchBox">
                <input type="text" placeholder="City" onChange={(event)=>setCity(event.target.value)}/>
                <button type="submit"/>
            </form>
        </>
    );
}

export default CityComponents;