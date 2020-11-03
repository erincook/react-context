import React from 'react'; 
import ReactDOM from 'react-dom'; 
import Button from './button'; 
import { render, cleanup } from '@testing-library/react'; 
import renderer from 'react-test-renderer'; // For snapshot testing. 

afterEach(cleanup); 

it("renders without crashing", () => {
    const div = document.createElement("div"); 
    ReactDOM.render(<Button></Button>, div); 
})

it("renders button with correct message", () => {
    const {getByTestId} = render(<Button label="Something Special"></Button>)
    expect(getByTestId("button1")).toHaveTextContent("Something Special"); 
}); 

it("renders button with correct second message", () => {
    const {getByTestId} = render(<Button label="Save"></Button>)
    expect(getByTestId("button1")).toHaveTextContent("Save"); 
}); 

it("matches snapshot", () => {
    const tree = renderer.create(<Button label="save work"></Button>).toJSON(); 
    expect(tree).toMatchSnapshot(); 
}); 