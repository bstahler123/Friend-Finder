var path = require("path");

module.exports = function(app) {

	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "../html/homepage.html"));
	});

	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "../html/survey.html"));
	});

	app.get("/friends", function(req, res) {
		res.sendFile(path.join(__dirname, "../html/friends.html"));
	});

};