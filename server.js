// ******************************************************************************
// Program: NYT React Article Search
// Authors: Rod Skoglund
// File: (routes-api) server.js
// Description: Configures Express, Middleware, Mongo/Mongoose and starts 
//              the server.
// ******************************************************************************

// ******************************************************************************
// Imports 
// ******************************************************************************
const express = require('express'); // Server
const bodyParser = require ('body-parser'); // JSON Middleware
const mongoose = require('mongoose'); // MongoDB ORM
const routes = require("./routes");
let db = require("./models"); // Require all models

// ******************************************************************************
// Variables 
// ******************************************************************************
let PORT = process.env.PORT || 3001;
let mongooseConnection = mongoose.connection;

// ******************************************************************************
// Initialize Express 
// ******************************************************************************
let app = express();

// ******************************************************************************
// Express Middleware 
// ******************************************************************************
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true})); // Allows For JSON Interactions Between Client & Server
app.use(express.static("client/build")); // Serve Static React Pages
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

// ******************************************************************************
// Mongoose Configurations 
// ******************************************************************************
mongoose.Promise = global.Promise; // Set up promises with mongoose

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytreact");

mongooseConnection.on('error', console.error.bind(console, 'connection error:'));

mongooseConnection.once('open', function() {
  console.log(`Sucessfully Connected to Mongo DB !`); // If Connection is successful, Console.log(Message)
});

var cors = require("cors");
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(cors());

app.use(routes); // Add routes, both API and View

// ******************************************************************************
// Start Server 
// ******************************************************************************
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

