import React from 'react'; 
import moment from 'moment'; 
import './date.css'; 

export default () => {
   return (<h3 className="date-stamp">
        Today is: {moment().format('MMMM Do YYYY, h:mm:ss a')};
   </h3>)
}; 
