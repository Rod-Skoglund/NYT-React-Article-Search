// ******************************************************************************
// Program: NYT React Article Search
// Authors: Rod Skoglund
// File: (src-util) app.js
// Description: Defines the methods to retrieve data from NYT and the 
//              mongo/mongoose article schema.
// ******************************************************************************

// ******************************************************************************
// Import React & Page Components. 
// ******************************************************************************
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './pages/Home';
import Saved from './pages/Saved';

// ******************************************************************************
// Add the app React Component to handle routing. 
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
    );
  }
}

export default App
