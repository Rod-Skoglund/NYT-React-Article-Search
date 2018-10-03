// ******************************************************************************
// Program: NYT React Article Search
// Authors: Rod Skoglund
// File: (client-src-pages-Home) Home.js
// Description: Creates the Home Page React Component.
// ******************************************************************************

// ******************************************************************************
// Imports React Component & compnents/utilities
// ******************************************************************************
import React, {Component, Fragment} from "react";

import SearchForm from "../../components/SearchForm";
import Results from "../../components/Results";
import API from "../../utils/API";
import Nav from '../../components/NavBar';

// ******************************************************************************
// Define a new React Class Component. 
// ******************************************************************************
class Home extends Component {

  constructor(){
    super();
    this.state = {
      articles : [],
      limit: null
    }; // End this.state

    this.newQuery = this.newQuery.bind(this);
    this.searchArticles = this.searchArticles.bind(this);
  } // End constructor


  newQuery({searchParams}){
    let {topic, startDate, endDate, limit} = searchParams;
    this.setState({limit}); // Set the limit of Articles to Show
    let queryString = `${topic}${startDate}${endDate}`;
    this.searchArticles(queryString);
  } // End newQuery

  searchArticles = query => {
    API.search(query).then(res => {
    let articlesArray = [];

    res.data.response.docs.map(({snippet, web_url, pub_date, _id, multimedia}) => { articlesArray.push({title: snippet, url: web_url, date: pub_date, articleId: _id , image: multimedia[2]}); });

    this.setState(prevState => ({
      articles: [...prevState].concat(articlesArray).splice(0, this.state.limit)
    }), console.log(this.state.limit))

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
    ) // End return
  } // End render

} // End class

export default Home;
