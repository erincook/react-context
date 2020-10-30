import React, {useState, createContext} from 'react';
export const WeatherContext = createContext(); 
export const WeatherProvider = props => {
    const [weatherList, setWeatherList] = useState([
        {
            location: "Canton,GA,USA",
            weather: {
                "coord": {
                    "lon": -81.38,
                    "lat": 40.8
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "base": "stations",
                "main": {
                    "temp": 278.57,
                    "feels_like": 272.63,
                    "temp_min": 278.15,
                    "temp_max": 279.15,
                    "pressure": 1016,
                    "humidity": 81
                },
                "visibility": 10000,
                "wind": {
                    "speed": 6.2,
                    "deg": 340
                },
                "clouds": {
                    "all": 90
                },
                "dt": 1604066728,
                "sys": {
                    "type": 1,
                    "id": 3573,
                    "country": "US",
                    "sunrise": 1604058850,
                    "sunset": 1604096638
                },
                "timezone": -14400,
                "id": 5149222,
                "name": "Canton",
                "cod": 200
            }
        }
    ]); 
   return (
       <WeatherContext.Provider value={[weatherList, setWeatherList]}>
           {props.children}
       </WeatherContext.Provider>
   )
}