var friends = require("../finder_data/friends.js");

var bestFriends = require("../finder_data/best_matches.js");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {

    res.json(friends);

  });

  app.get("/api/bestFriends", function(req, res) {

    res.json(bestFriends);

  })

  app.post("/api/new", function(req, res) {
    var newFriend = req.body;

    console.log(newFriend);

    friends.push(newFriend);

    res.json(newFriend);
  });

}