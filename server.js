// Friend Finder | By Juliette Rapala
// =====================================================================================

  // Setup  
  // =====================================================================================

    // NPM Packages
    var express = require("express");
    var bodyParser = require('body-parser');
    var path = require('path');

    // Initialize Express
    var app = express();

    // Initial Port
    var PORT = 3000;

    // Set up Express app to handle data parsing
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

  // Listen
  // =====================================================================================

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT + "...");
  })
