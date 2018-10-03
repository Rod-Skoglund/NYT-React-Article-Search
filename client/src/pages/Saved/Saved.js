// ******************************************************************************
// Program: NYT React Article Search
// Authors: Rod Skoglund
// File: (src-pages-Saved) Saved.js
// Description: Creates the Saved Page React Component.
// ******************************************************************************

// ******************************************************************************
// Imports React Component & compnents/utilities
// ******************************************************************************
import React, { Component } from "react";
// import React, { Component, Fragment } from "react";
import API from '../../utils/API';
import SavedResult from '../../components/SavedResult';
import Nav from '../../components/NavBar';

// ******************************************************************************
// Define a new React Class Component. 
// ******************************************************************************
class Saved extends Component {

  constructor(props){
    super(props)
    this.state={
      savedArticles : null,
      articles : null
    }
    this.onDelete = this.onDelete.bind(this);
  } // End constructor

  onDelete(id){
    API.deleteSavedArticle(id).then((resArticles) =>{
      console.log("article delete");
      console.log(JSON.stringify(resArticles));
      this.setState({
        articles:  resArticles.data.map(eachArticle => {
                  return(
                  <SavedResult date={eachArticle.date} key={eachArticle.articleId} articleId={eachArticle.articleId}
                    url={eachArticle.url} title={eachArticle.title} image={eachArticle.image} onDelete={this.onDelete}/>
                  );
                }) // End articles map
      }) // End this.state articles

    }); // End deleSavedArticle then
  } // End onDelete

  componentDidMount(){
    API.getSavedArticles().then((savedArticles) => {

      let articles = savedArticles.data;

      this.setState({
        articles:  articles.map(eachArticle => {
                  return(
                  <SavedResult date={eachArticle.date} key={eachArticle.articleId} articleId={eachArticle.articleId}
                    url={eachArticle.url} title={eachArticle.title} image={eachArticle.image} onDelete={this.onDelete}/>
                  );
                }) // End articles map
      }); // End this.state articles

    }).then(this.setState({savedArticles: true}));
  } // EndcomponentDidMount

  render() {
    return (
      <div>
      <Nav/>
      <div className = "container">
        {this.state.savedArticles? (
          <div style={{"margin-top": "20px"}}>
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title"><strong><i className="fa fa-table"></i> Results </strong></h3>
              </div>
              <div className="panel-body" id="well-section">
                <ol className="collection with-header">
                    {this.state.articles}
                </ol>
              </div>
            </div>
          </div>
          )
           :
          (<div className="preloader-wrapper big active right" style={{
              background: "none"
            }}>
            <div className="spinner-layer spinner-blue">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div>
              <div className="gap-patch">
                <div className="circle"></div>
              </div>
              <div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>

            <div className="spinner-layer spinner-red">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div>
              <div className="gap-patch">
                <div className="circle"></div>
              </div>
              <div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>

            <div className="spinner-layer spinner-yellow">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div>
              <div className="gap-patch">
                <div className="circle"></div>
              </div>
              <div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>

            <div className="spinner-layer spinner-green">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div>
              <div className="gap-patch">
                <div className="circle"></div>
              </div>
              <div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>
          </div>)
        }
      </div>
    </div>
    ); //End return
  } // End render

} // End class

export default Saved;
