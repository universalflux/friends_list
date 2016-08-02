var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

// Querys to the mongodb database....

module.exports = (function(){
	return {
		index: function(req, res) {
			Friend.find({}, function(err, results){
				if(err){
					console.log(err);
				} else {
					res.json(results);
				}
			})
		},
		show: function(req, res) {
			Friend.create({name: req.body.name, age: req.body.age}, function(err){
				if(err) {
					console.log(err);
				} else {
					console.log('Success!');
				}
			})
		}
	}
})();