// ******************************************************************************
// Program: NYT React Article Search
// Authors: Rod Skoglund
// File: (routes-api) index.js
// Description: Define and exports routes.
// ******************************************************************************

const router = require("express").Router();
const articleRoutes = require("./articles.js");

router.use("/", articleRoutes);

module.exports = router;
