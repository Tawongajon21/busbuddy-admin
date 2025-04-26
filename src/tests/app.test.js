import React from "react";
import {render,fireEvent,waitFor} from "@testing-library/react"
import  ReactDOM  from "react-dom";
import App from "../App";

it('renders correctly',()=>{
    let div= document.createElement('div');
    ReactDOM.render(<App/>,div);

})