// ******************************************************************************
// Program: NYT React Article Search
// Authors: Rod Skoglund
// File: (client-src-components-NavBar) Nav.js
// Description: Creates the Results React Component.
// ******************************************************************************

// ******************************************************************************
// Imports React, IndividualResult Component. 
// ******************************************************************************
import React, {Component} from "react";

import IndividualResult from "../IndividualResult";

// ******************************************************************************
// Define a new React Class Component. 
// ******************************************************************************
export default class Results extends Component {
  constructor(props) {
    super(props);
  } //End constructor

  render() {
    let articleResults = [];

    if(this.props.results.articles.length > 0 ){

      // console.log(JSON.stringify(this.props.results.articles))
      articleResults = this.props.results.articles.map(article => {

        return(
          <IndividualResult title={article.title} url={article.url} date={article.date} id={article.articleId} key={article.articleId}
            image={`${article.image? "https://static01.nyt.com/"+ article.image.url : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/450px-No_image_available.svg.png" }`}
          />
        ) // End return
      }) // End articleResults map

    } // End if articles length

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
    ) // End return
  } // End render
} // End class
