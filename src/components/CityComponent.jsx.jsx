import React from "react";
import { ReactComponent as perfect_day} from './perfect-day.svg'


function CityComponents (){


    return(
        <>
            <img className="WelcomeLogo" src="perfect-day.svg"/>
            <span className="ChooseCityLabel">Find Weather of your city</span>
            <form className="SearchBox">
                <input type="text" placeholder="City"/>
                <button type="submit"/>
            </form>
            
        </>
    );
}

export default CityComponents;