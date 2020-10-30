import React, {useContext} from 'react'; 
import {WeatherContext} from '../../contexts/weather'; 
import WeatherItem from '../weatherItem/weatherItem'; 
const WeatherList = () => {
    const [WeatherData] = useContext(WeatherContext); 
    return (
        <>
        {WeatherData.map((loc, ind) => (
            <WeatherItem loc={loc} key={ind} />
        ))}
        </>
    );
}; 
export default WeatherList; 