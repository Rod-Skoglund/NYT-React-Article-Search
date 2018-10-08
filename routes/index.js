// ******************************************************************************
// Program: NYT React Article Search
// Authors: Rod Skoglund
// File: (routes) index.js
// Description: Exports routes for use by the server.js.
// ******************************************************************************

// ******************************************************************************
// Imports 
// ******************************************************************************
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// ******************************************************************************
// Central API Routes 
// ******************************************************************************
router.use("/", apiRoutes);

// ******************************************************************************
// If no API routes are hit, send the React app 
// ******************************************************************************
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router; 
