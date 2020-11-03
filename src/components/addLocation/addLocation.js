import React, {useState, useContext} from 'react'; 
import './addLocation.css'; 
import {WeatherContext} from '../../contexts/weather'; 

const AddLocation = () => {
    const [_ , setWeatherData] = useContext(WeatherContext); 
    const [location, setLocation] = useState('');
    const [err, setErr] = useState(''); 
    
    const updateLocation = e => {
         setLocation(e.target.value); 
    }
    const addLocation = e => {
        e.preventDefault(); 
        let newloc = location.replace(" ",""); //strip any spaces  
        fetch("https://community-open-weather-map.p.rapidapi.com/weather?q="+newloc, {
            headers : {'useQueryString':true, 'x-rapidapi-key': process.env.REACT_APP_WEATHER_KEY}
        })
        .then(response => response.json())
        .then(data => {
            if(!data.message){
                setWeatherData(previousWeatherData => [...previousWeatherData, {location: location, weather: data}]); 
            } else {
                setErr(data.message); 
            }
        }); 
    }

    return (
        <div className="add-location">
            <input type="text" name="location-input" value={location} onChange={updateLocation}/>
            <button onClick={addLocation}>Add Location</button>
            <div>{err}</div>
        </div>
    )
}; 

export default AddLocation;