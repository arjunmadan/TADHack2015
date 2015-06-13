//Required modules
var request = require('request');


var API_KEY = 'AIzaSyC2sLZa8Y1O2m4iGX8EP2vDZttXvlsyHwk';

var url = 'https://maps.googleapis.com/maps/api/directions/json?'

function directions(origin, destination) {
	
	var query = 'origin=' + origin + '&destination=' + destination + '&key=' + API_KEY;
	
	request(url+query, function(error, response, body) {
  		console.log(body);
  		//TO-DO: parse information and return to user.
  	});
	
}

exports.directions = directions;