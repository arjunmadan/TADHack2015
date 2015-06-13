//Required modules
var request = require('request');


var API_KEY = 'AIzaSyC2sLZa8Y1O2m4iGX8EP2vDZttXvlsyHwk';

var url = 'https://maps.googleapis.com/maps/api/directions/json?'

function directions(origin, destination) {
	
	var query = 'origin=' + origin + '&destination=' + destination + '&key=' + API_KEY;
	
	request(url+query, function(error, response, body) {
  		console.log(body);
  		//TO-DO: parse information and return to user.
  		for(i = 0; i < body['routes'][0]['legs'][0]['steps'].length; i++)
		{
			console.log(body['routes'][0]['legs'][0]['steps'][i]['html_instructions'] + " for " + body['routes'][0]['legs'][0]['steps'][i]['distance']['text']);
		}
  	});
	
}

exports.directions = directions;