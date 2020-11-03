import React, {useContext} from 'react'; 
import {WeatherContext} from '../../contexts/weather'; 
import './header.css'; 

export default () => {
    const [weatherData] = useContext(WeatherContext); 

    return (
        <div className="header" data-testid="header1">
            <h1 className="main">Welcome Morehouse, Clark and Spelman Students</h1>
            <h2> Number of Weather Locations: {weatherData.length} </h2>
        </div>
    )
}; 