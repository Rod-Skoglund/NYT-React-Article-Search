// ******************************************************************************
// Program: NYT React Article Search
// Authors: Rod Skoglund
// File: (client-src) App.js
// Description: Handles application routing
// ******************************************************************************

// ******************************************************************************
// Imports 
// ******************************************************************************
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './pages/Home';
import Saved from './pages/Saved';

// ******************************************************************************
// Class 
// ******************************************************************************
class App extends Component {

  render() {
    return (
      <div>
          <Router>
            <switch>
              <Route exact path="/" component={Home}/>
              <Route path="/Saved" component={Saved}/>
            </switch>
          </Router>
      </div>
    ); // End return
  } // End render
} // End class

export default App
