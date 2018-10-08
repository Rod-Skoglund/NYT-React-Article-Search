// ******************************************************************************
// Program: NYT React Article Search
// Authors: Rod Skoglund
// File: (client-src-components-NavBar) Nav.js
// Description: Defines the class used to display the Nav component
// ******************************************************************************

// ******************************************************************************
// Imports 
// ******************************************************************************
import React, {Component} from "react";
import IndividualResult from "../IndividualResult";

// ******************************************************************************
// Class 
// ******************************************************************************
export default class Results extends Component {

  render() {
    let articleResults = [];

    if(this.props.results.articles.length > 0 ){
      console.log(JSON.stringify(this.props.results.articles))
      articleResults = this.props.results.articles.map(article => {
        return(
          <IndividualResult title={article.title} url={article.url} date={article.date} id={article.articleId} key={article.articleId}
            image={`${article.image? "https://static01.nyt.com/"+ article.image.url : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/450px-No_image_available.svg.png" }`}
          />
        ) //End return
      }); //End articleResults mapping
    } //End if (this.props.results.articles.length > 0)

    return (
      <div>
        {this.props.results.articles.length > 0 ? (
          <div>
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title"><strong><i className="fa fa-table"></i> Results </strong></h3>
              </div>
              <div className="panel-body" id="well-section">
                <ol className="collection with-header">
                    {articleResults}
                </ol>
              </div>
            </div>
          </div>
        ) : <div></div>}
      </div>
    ); //End return
  } // End render
} // End class
