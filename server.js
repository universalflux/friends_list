var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

//bodyparser to handle the json data.

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname + '/client')));

require('./server/config/mongoose.js');
// must put this first ^^ requires the mongoose file, allowing the server to communicate.
require('./server/config/routes.js')(app);
// requires the routes, to tell the server where to go and what to do.

app.listen(7000, function(){
	console.log("Listening intently on port 7000");
});