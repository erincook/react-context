import React from 'react'; 
import './header.css'; 
import Date from '../date/date'; 

export default () => {
    return (
        <div>
            <h1 className="main">Welcome Morehouse, Clark and Spellman Students</h1>
            <Date/>
        </div>
    )
}; 