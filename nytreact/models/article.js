// ******************************************************************************
// Program: NYT React Article Search
// Authors: Rod Skoglund
// File: (models) article.js
// Description: Defines the mongo/mongoose article schema.
// ******************************************************************************

// ******************************************************************************
// Imports 
// ******************************************************************************
const mongoose = require("mongoose");

// ******************************************************************************
// Initialize Schema
// ******************************************************************************
const Schema = mongoose.Schema;

// ******************************************************************************
// Define Article Schema
// ******************************************************************************
const articleSchema = new Schema({
  title: {type: String, require: true},
  image: {type: String, require: true},
  date: { type: Date, default: Date.now },
  url: {type: String, require: true},
  articleId: {type: String, require: true},
});

// Create model from the above schema, using mongoose's model method
const Article = mongoose.model("Article", articleSchema); 

// ******************************************************************************
// Export 
// ******************************************************************************
module.exports = Article;
