import React from 'react'; 
import './weatherItem.css'; 
const WeatherItem = ({loc}) => {
    if (loc.weather) {
        return (
            <div className="weather-item">
                <h4>{loc.location}</h4>
                <div>{loc.weather.weather[0].description || ' -- '}</div>
                <div>Temp: {loc.weather.main.temp || ' -- '}</div>
                <div>Feels Like: {loc.weather.main.feels_like || ' -- '}</div>
                <div>Temp Min: {loc.weather.main.temp_min || ' -- '}</div>
                <div>Temp Max: {loc.weather.main.temp_max || ' -- '}</div>
                <div>Pressure: {loc.weather.main.pressure || ' -- '}</div>
                <div>Humidity: {loc.weather.main.humidity || ' --'}</div>
                <div>Wind: {loc.weather.wind.speed || ' -- '} km/hr at {loc.weather.wind.deg || ' -- '}</div> 
            </div>
        )
    } else {
        return (
            <div className="weather-item">
                <h4>{loc.location}</h4>
            </div>
        )
    }
}; 
export default WeatherItem; 