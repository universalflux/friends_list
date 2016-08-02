var friends = require('./../controllers/friends.js');
module.exports = function(app){
	app.get('/friends', function(req, res){
		friends.index(req, res);
	});

	// routes, tells the data where to go.

	app.post('/friends', function(req, res){
		friends.show(req, res);
	})

	// tells the data where to post.
}