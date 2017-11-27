// Dependencies 
// =====================================================================================
 
	var friendData = require("../data/friends");


// API Routes  
// =====================================================================================

	module.exports = function(app) {
		
		// API
		app.get("/api/friends", function(req, res) {
			res.json(friendData);
		});


   		app.post("/api/friends", function(req, res) {

   			// // Set up variables
   			var formData = req.body;
   			var userScores = req.body["scores[]"]
   			var totalDifference;

   			// Create best match object
	        var bestMatch = {
	            name: "",
	            photo: "",
	            // Set high initial totalDifference limit since we want the lowest difference possible
	            totalDifference: 100000
	        };

	        // Loop through all friends best match
	        for (var i = 0; i < friendData.length; i++) {
	        	totalDifference = 0;

	        	// Loop through scores of each friend
	        	for (var j = 0; j < friendData[i].scores.length; j++) {
					totalDifference += (Math.abs(parseInt(userScores[j]) - parseInt(friendData[i].scores[j])));
					console.log(totalDifference);

            		if (totalDifference <= bestMatch.totalDifference) {
              			bestMatch.name = friendData[i].name;
              			bestMatch.photo = friendData[i].photo;
              			bestMatch.totalDifference = totalDifference;
					}
				}
	        }

      		// Add form data to friends.js
      		friendData.push(formData);

      		// Respond with best match
      		res.json(bestMatch);
      	});
  	};