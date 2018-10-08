// ******************************************************************************
// Program: NYT React Article Search
// Authors: Rod Skoglund
// File: (models) article.js
// Description: Defines the Article Schema (Mongo/Mongoose)
// ******************************************************************************

// ******************************************************************************
// Imports 
// ******************************************************************************
const mongoose = require("mongoose");

// ******************************************************************************
// Initialize 
// ******************************************************************************
const Schema = mongoose.Schema;

// ******************************************************************************
// Article Schema 
// ******************************************************************************
const articleSchema = new Schema({
  title: {type: String, require: true},
  image: {type: String, require: true},
  date: { type: Date, default: Date.now },
  url: {type: String, require: true},
  articleId: {type: String, require: true},
});

// ******************************************************************************
// Create the model from the above schema, using mongoose's model method
// ******************************************************************************
const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
