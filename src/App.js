import React from 'react';
import './App.css';
import {WeatherProvider} from './contexts/weather'; 
import Header from './components/header/header'; 
import WeatherList from './components/weatherList/weatherList'; 
import AddLocation from './components/addLocation/addLocation'; 

class App extends React.Component {
  
/*
addNewTopic = ()=> {
    let newTopic = this.state.newtopic; 
    this.setState( state => {
        const topics = [...state.topics, newTopic]; 
        const newtopic = ""; 
        return {newtopic, topics}
    }); 
}
updateNewTopic = (event) => {
  this.setState({
    newtopic: event.target.value
  }); 
  console.log(this.state); 
}
*/
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
