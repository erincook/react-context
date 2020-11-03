import React from 'react';
import ReactDOM from 'react-dom'; 
import { act } from 'react-dom/test-utils';
import {WeatherProvider} from '../../contexts/weather';
import AddLocation from "./addLocation";
import mockJson from "../../mockjson.js";  
import renderer from 'react-test-renderer'; // For snapshot testing. 

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockJson),
  })
);

let container; 
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});
  
afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

it("renders without crashing", () => {
    ReactDOM.render(<WeatherProvider><AddLocation/></WeatherProvider>, container); 
});

it("should match snapshot", () => {
    const tree = renderer.create(<WeatherProvider><AddLocation/></WeatherProvider>).toJSON(); 
    expect(tree).toMatchSnapshot(); 
}); 

it("should call fetch once after button is clicked", () => {
    act(()=>{ ReactDOM.render(<WeatherProvider><AddLocation/></WeatherProvider>, container); }); 
    const input = container.querySelector("input"); 
    const button = container.querySelector("button"); 
    act(()=> {
        input.value = "Canton,GA,USA"; 
        button.click(); 
    }); 
    expect(fetch).toHaveBeenCalledTimes(1);
}); 
