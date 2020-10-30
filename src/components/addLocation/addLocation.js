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
            headers : {'useQueryString':true, 'x-rapidapi-key': '8e03727632msh2d3f7dd8fec4b69p146e21jsn48972b46cd6d'}
        })
        .then(response => response.json())
        .then(data => {
            console.log(data); 
            if(!data.message){
                setWeatherData(previousWeatherData => [...previousWeatherData, {location: location, weather: data}]); 
            } else {
                setErr(data.message); 
            }
        }); 
    }

    return (
        <form className="add-location">
            <input type="text" name="location-input" value={location} onChange={updateLocation}/>
            <button onClick={addLocation}>Add Location</button>
            <div>{err}</div>
        </form>
    )
}; 

export default AddLocation;