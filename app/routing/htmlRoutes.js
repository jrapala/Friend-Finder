// Dependencies 
// =====================================================================================
 
	var path = require("path");

// HTML Routes  
// =====================================================================================

	module.exports = function(app) {
		
		// Root
		app.get("/", function(req, res) {
			res.sendFile(path.join(__dirname, "../public/home.html"));
		});
		
		// Survey
		app.get("/survey", function(req, res) {
			res.sendFile(path.join(__dirname, "../public/survey.html"));
		});

		// Default
  		app.get("*", function(req, res) {
    		res.sendFile(path.join(__dirname, "../public/home.html"));
  		});
