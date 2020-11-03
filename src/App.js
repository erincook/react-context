import React from 'react';
import './App.css';
import {WeatherProvider} from './contexts/weather'; 
import Header from './components/header/header'; 
import WeatherList from './components/weatherList/weatherList'; 
import AddLocation from './components/addLocation/addLocation'; 

class App extends React.Component {
  render (){
    return (
      <WeatherProvider>
        <Header/>
        <WeatherList/>
        <AddLocation/>
      </WeatherProvider>  
    )
  }
}

export default App;
