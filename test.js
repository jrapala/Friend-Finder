var formData = {
name : "jr",
photo : "tbd",
scores : ["2", "2", "2", "2", "2", "2", "2", "2", "2", "2"]
}

var friendData = [
  {
    "name":"Ahmed",
    "photo": "https://i.imgur.com/2ybwY41h.png",
    "scores":[5,1,4,4,5,1,2,5,4,1]
  },
  {
    "name":"Amy",
    "photo": "https://i.imgur.com/VEllJwmh.png",
    "scores":[1,1,1,2,1,5,5,3,1,1]
  },
  {
    "name":"April",
    "photo": "https://i.imgur.com/gD9pXDLh.png",
    "scores":[5,5,4,5,4,3,4,5,5,5]
  },
  {
    "name":"Andy",
    "photo": "https://i.imgur.com/gEUyh1Fh.png",
    "scores":[2,2,3,5,4,2,1,2,5,4]
  },
  {
    "name":"Alex",
    "photo": "https://i.imgur.com/5BBmvJRh.png",
    "scores":[5,2,1,2,5,2,1,2,5,1]
  },
  {
    "name":"Annie",
    "photo": "https://i.imgur.com/tBbgRWbh.png",
    "scores":[5,4,5,1,2,1,5,4,5,3]
  }
];

// // Set up variables
        var userScores = formData.scores;
        var totalDifference;

        // Create best match object
          var bestMatch = {
              name: "",
              photo: "",
              totalDifference: 100000
          };

          // Loop through all friends best match
          for (var i = 0; i < friendData.length; i++) {
            totalDifference = 0;
            for (var j = 0; j < friendData[i].scores.length; j++) {
              //console.log(friendData[i].scores[j]);
              totalDifference += (Math.abs(parseInt(userScores[j]) - parseInt(friendData[i].scores[j])));
            }
            console.log(totalDifference);

            if (totalDifference <= bestMatch.totalDifference) {
              bestMatch.name = friendData[i].name;
              bestMatch.photo = friendData[i].photo;
              bestMatch.totalDifference = totalDifference;
            }

            console.log(bestMatch);

          }