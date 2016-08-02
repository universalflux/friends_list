var mongoose = require('mongoose');
var fs = require('fs');

//connects the the database.

mongoose.connect('mongodb://localhost/friends_trackr');

var models_path = __dirname + '/../models'

//connects the models with the database.

fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js') > 0){
		require(models_path + '/' + file);
	}
//checks for files in the models path with the .js extension.
});