// ******************************************************************************
// Program: NYT React Article Search
// Authors: Rod Skoglund
// File: (client-src-components-NavBar) Nav.js
// Description: Creates the Navigation Bar React Component.
// ******************************************************************************

// ******************************************************************************
// Imports React Component and Nav.css. 
// ******************************************************************************
import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import './Nav.css';

// ******************************************************************************
// Define a new React Class Component. 
// ******************************************************************************
class Nav extends Component {

  constructor(props) {
      super(props);
  } // End constructor


  render(){
    return(
      <div>
        <nav>
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="right">
              <li className="nav-element"><a href="#" className="brand-logo center">New York Times Article Search</a></li>
              <li><a onClick={()=>window.location.replace("/")}>Home</a></li>
              <li className="nav-element"><NavLink to="/saved">Saved</NavLink></li>
            </ul>
          </div>
        </nav>
      </div>
  )} // End of return & render
} // End of class

export default Nav;
