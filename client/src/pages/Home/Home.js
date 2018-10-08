// ******************************************************************************
// Program: NYT React Article Search
// Authors: Rod Skoglund
// File: (client-src-pages-Home) Home.js
// Description: Defines the class used to display the Home page
// ******************************************************************************

// ******************************************************************************
// Imports 
// ******************************************************************************
import React, { Component, Fragment} from "react";

import SearchForm from "../../components/SearchForm";
import Results from "../../components/Results";
import API from "../../utils/API";
import Nav from '../../components/NavBar';

// ******************************************************************************
// Class 
// ******************************************************************************
class Home extends Component {
  
  constructor(){
    super();
    this.state = {
      articles : [],
      limit: null
    };

    this.newQuery = this.newQuery.bind(this);
    this.searchArticles = this.searchArticles.bind(this);
  } //End constructor


  newQuery({searchParams}){
    // console.log(JSON.stringify(searchParams))
    let {topic, startDate, endDate, limit} = searchParams;
    this.setState({limit}); // Set the limit of Articles to Show
    let queryString = `${topic}${startDate}${endDate}`;
    this.searchArticles(queryString);
  } // End newQuery

  searchArticles = query => {
    API.search(query).then(res => {
    let articlesArray = [];

    res.data.response.docs.map(({snippet, web_url, pub_date, _id, multimedia}) => {
        articlesArray.push({title: snippet, url: web_url, date: pub_date, articleId: _id , image: multimedia[2]});
      });


    this.setState(prevState => ({
      articles: [...prevState].concat(articlesArray).splice(0, this.state.limit)
    }), console.log(this.state.limit))

    // console.log("state is " + JSON.stringify(this.state));
  }).catch(err => console.log(err));
}; // End searchArticles

  render() {
    return (
    <Fragment>
      <Nav/>
        <div className = "container">
          <SearchForm newQuery={this.newQuery}/>
          <Results results={this.state}/>
        </div>
    </Fragment>
    )
  } // End render
} // End class

export default Home;
