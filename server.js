// Friend Finder | By Juliette Rapala
// =====================================================================================

  // Setup  
  // =====================================================================================

    // Dependencies
    var express = require("express");
    var bodyParser = require('body-parser');
    var path = require('path');

    // Initialize Express
    var app = express();

    // Initial Port
    var PORT = process.env.PORT || 3000;

    // Set up Express app to handle data parsing
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    // Routes
    require("./app/routing/apiRoutes")(app);
    require("./app/routing/htmlRoutes")(app);


  // Listen
  // =====================================================================================

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT + "...");
  })
