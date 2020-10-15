import React from 'react'; 

export default class HelloWorld extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount(){
        console.log("the component did update"); 
    }
    
    render() {
        var lis = this.props.topics.map((topic, index)=> <li key={index}> {topic} </li> );
        return (
            <ol>
               {lis}
            </ol>
        )
    }
}
