// ******************************************************************************
// Program: NYT React Article Search
// Authors: Rod Skoglund
// File: (routes-api) article.js
// Description: Defines routes for the app.
// ******************************************************************************

// ******************************************************************************
// Imports 
// ******************************************************************************
const router = require("express").Router();
const articleController = require("../../controllers/articleController");

// ******************************************************************************
// Routes 
// ******************************************************************************
router.route("/saveArticle").post(articleController.save);
router.route("/getSavedArticles").get(articleController.getSavedArticles);
router.route("/deleteSavedArticle").delete(articleController.deleteSavedArticle);

module.exports = router;
