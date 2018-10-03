// ******************************************************************************
// Program: NYT React Article Search
// Authors: Rod Skoglund
// File: (client-src-components-IndividualResult) IndividualResult.js
// Description: Define the new React component to manage Individual Articles.
// ******************************************************************************

// ******************************************************************************
// Imports React Component and the (utils) API.js. 
// ******************************************************************************
import React, {Component} from "react";
import API from '../../utils/API';

// ******************************************************************************
// Define a new React Class Component. 
// ******************************************************************************
export default class IndividualResult extends Component {

  constructor(){
    super();
    this.state={
      saved: null
    }
    this.save = this.save.bind(this);
  }; // End constructor

  save(){
    console.log("Saved Article Clicked")
    let indRes = this;
    API.saveArticle({
      articleId : this.props.id,
      url: this.props.url ,
      title: this.props.title,
      date : this.props.date,
      image : this.props.image
    }).then(indRes.setState({
      saved: true
    }));
  }; // End save

  render() {
    return (
      <li className="collection-item">
        <img className = "img-fluid img-thumbnail rounded right" style={{height: "100px", width: "100px"}} src={this.props.image} alt=""/>
        <br/>
        <strong> Title: </strong>  {this.props.title}
        <br/>
        <strong> URL: </strong> <a href={this.props.url} target="_blank"> {this.props.url} </a>
        {this.props.date? (<strong><br/>{`Date: ${this.props.date}`}</strong>) : ""}
        <br/>
        <strong> ID: </strong> {this.props.id}
        <br/>
        {this.state.saved? (<button style={{"margin-top" : "10px"}} id={this.props.id} className="btn btn-primary right-align"> Article Saved </button>):
          (<button style={{"margin-top" : "10px"}} id={this.props.id} onClick={this.save} className="btn btn-success right-align"> Save </button>)
        }
      </li>

    ); // End return
  } // End render
} // End class
