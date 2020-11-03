import React, {useContext} from 'react'; 
import ReactDOM from 'react-dom'; 
import {WeatherProvider} from '../../contexts/weather'; 
import Header from './header'; 

it("renders without crashing", () => {
    const div = document.createElement("div"); 
    ReactDOM.render(<WeatherProvider><Header/></WeatherProvider>, div); 
}); 

it("should show one locations from provider", () => {
    const div = document.createElement("div"); 
    ReactDOM.render(<WeatherProvider><Header/></WeatherProvider>, div); 
    expect(div.querySelector("h2").innerHTML).toBe(" Number of Weather Locations: 1 "); 
}); 
