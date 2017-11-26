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
   			// var scores = formData.scores;
   			// var totalDifference = 0;

   			// Create best match object
	        var bestMatch = {
	            name: "Ahmed",
	            photo: "https://i.imgur.com/2ybwY41h.png",
	            totalDifference: 0
	        };

	     //    // Loop through all friends best match
	     //    for (var i = 0; i < friendData.length; i++) {
	     //    	totalDifference = 0;

	     //    	// Loop through scores of each friend
	     //    	// for (var j = 0; i < friendData[i].scores[j].length; j++) {
	     //    		//totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
	     //    		                //Find best friend match
      //           // if (totalDifference <= bestFriend.friendDifference) {

      //           //     bestFriend.name = friends[i].name;
      //           bestFriend.name = friends[0].name;
      //           //     bestFriend.photo = friends[i].photo;
      //           bestFriend.photo = friends[0].photo;
      //           //     bestFriend.friendDifference = totalDifference;

      //           // }
	     //    }
	        

      		// Add form data to friends.js
      		friendData.push(formData);

      		// Respond with best match
      		res.json(bestMatch);
      	});
  	};