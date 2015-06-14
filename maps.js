//Required modules
var request = require('request');


var API_KEY = 'AIzaSyC2sLZa8Y1O2m4iGX8EP2vDZttXvlsyHwk';

var url = 'https://maps.googleapis.com/maps/api/directions/json?'

function directions(origin, destination) {
	
	var query = 'origin=' + origin + '&destination=' + destination + '&key=' + API_KEY;
	
	console.log(encodeURI(url + query));
	request(url + query, function(error, response, body) {
		console.log(body['routes']);
  		temp = body['routes'][0]['legs'][0]['steps'];
  		console.log(temp);
  		for(i = 0; i < temp.length; i++)
		{
			console.log(temp[i]['html_instructions'] + " for " + temp[i]['distance']['text']);
		}
  	});
	
}

exports.directions = directions;