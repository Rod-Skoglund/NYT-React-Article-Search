const router = require("express").Router();
const articleController = require("../../controllers/articleController");


// ******************************************************************************
// Program: NYT React Article Search
// Authors: Rod Skoglund
// File: (routes-api) articles.js
// Description: Defines and exports the routes.
// ******************************************************************************

router.route("/saveArticle").post(articleController.save);
router.route("/getSavedArticles").get(articleController.getSavedArticles);
router.route("/deleteSavedArticle").delete(articleController.deleteSavedArticle);

module.exports = router;
