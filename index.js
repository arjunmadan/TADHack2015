var express = require('express');
var app = express();
var AlchemyAPI = require('alchemy-api');
var alchemy = new AlchemyAPI('daba2817a502d0ba775bd4066ab559972763e076');
var maps = require('./maps.js')

var catapult = require("node-bandwidth");

//Using client directly
var client = new catapult.Client("userId", "apiToken", "apiSecret");

//Or you can use default client instance.
//Do that only once
catapult.Client.globalOptions.apiToken = "t-pdbvtsbm7crefjscsduudxa";
catapult.Client.globalOptions.apiSecret = "zld5gfwxkaclimz2fjm2hzptxol5bwf4cdjujty";
catapult.Client.globalOptions.userId = "u-m53dmzwgoxverwlyhah7wpa";

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
	var keywords;
	alchemy.keywords('Weather in raleigh', {}, function(err, res) {
  		if (err) throw err;


		// See http://www.alchemyapi.com/api/concept/htmlc.html for format of returned object
		keywords = res.keywords;
		console.log(JSON.stringify(keywords));
  
});
	//response.send(JSON.stringify(keywords));
	directions = maps.directions();
	console.log(JSON.stringify(directions));
	response.send(JSON.stringify(directions));
  
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

app.post('/', function(request, response) {
	console.log(typeof(request));
	console.log("Message received: " + request.body);
});