import React from 'react'; 

export default (props) => {
   const languages = props.LanguageList.map( (lang, index) => <li key={index}>{lang}</li>); 
   return (
        <ol>
            {languages}
        </ol>
    )
};