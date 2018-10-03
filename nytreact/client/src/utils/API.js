// ******************************************************************************
// Program: NYT React Article Search
// Authors: Rod Skoglund
// File: (client-src-util) app.js
// Description: Defines the methods to retrieve data from NYT and the 
//              mongo/mongoose article schema.
// ******************************************************************************

// ******************************************************************************
// Imports & basic variable definitions. 
// ******************************************************************************
import axios from "axios";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
const APIKEY = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931&q=";

// ******************************************************************************
// Define methods to retrieve data from NYT and the Mongo DB
// ******************************************************************************
export default {
  search: function(query) {
    return axios.get(BASEURL + APIKEY + query);
  },
  saveArticle: function(articleObject){
    return axios.post('/saveArticle', articleObject);
  },
  getSavedArticles: function(){
    return axios.get('/getSavedArticles');
  },
  deleteSavedArticle: function(id){
    return axios.delete('/deleteSavedArticle', {data: {articleId: id}})
  }

};
