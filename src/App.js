import React from 'react';
import './App.css';
//import Header from './components/header/header'; 
//import LanguageList from './components/languagelist/languagelist'; 
import TopicList from './components/topiclist/topiclist'; 

class App extends React.Component {
  constructor(props){
    super(props); 
    this.state = {
      newtopic: "",
      topics : ["HTML", "CSS", "Vanilla JS"]
    }; 
  }

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

render (){
  return (
    <>
      <h1> Hello Morehouse, Clark, and Spelman Students to React! </h1>
      <TopicList topics={this.state.topics}/>
      <input placeholder="add a new topic" id="new-topic" onChange={this.updateNewTopic} value={this.state.newtopic}/>
      <button onClick={this.addNewTopic} >click me when done!</button>
    </>
  )
}
  /*
  constructor(props){
    super(props); 
    this.state = {
      langs : ['HTML', 'Javascript', 'React Library']
    }; 

  }
  addTopic(){
    const topicInput = document.getElementById("new-topic"); 
    let newTopic = topicInput.value; 
    this.setState( state => {
        const langs = [...state.langs, newTopic]; 
        return {langs}
    }); 
    topicInput.value = ""; 
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <LanguageList LanguageList={this.state.langs}/>
        <input id="new-topic" type="text"></input>
        <button onClick={this.addTopic.bind(this)}>Add a Topic</button>
      </div>
    );
  } */
}

export default App;
