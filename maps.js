//Required modules
var request = require('request');
var catapult = require("node-bandwidth");

var client = new catapult.Client("userId", "apiToken", "apiSecret");

catapult.Client.globalOptions.apiToken = "t-pdbvtsbm7crefjscsduudxa";
catapult.Client.globalOptions.apiSecret = "zld5gfwxkaclimz2fjm2hzptxol5bwf4cdjujty";
catapult.Client.globalOptions.userId = "u-m53dmzwgoxverwlyhah7wpa";

var API_KEY = 'AIzaSyC2sLZa8Y1O2m4iGX8EP2vDZttXvlsyHwk';

var url = 'https://maps.googleapis.com/maps/api/directions/json?'

function directions(origin, destination) {
	
	var query = 'origin=' + origin + '&destination=' + destination + '&key=' + API_KEY;
	
	console.log(encodeURI(url + query));
	request(url + query, function(error, response, body) {
		//console.log(body);
		test = JSON.parse(body);
  		temp = test['routes'][0]['legs'][0]['steps'];
  		
  		for(i = 0; i < temp.length; i++)
		{
			catapult.Message.create({from: "+12525130313", to: "+19199855863", text: temp[i]['html_instructions'] + " for " + temp[i]['distance']['text']}, function(err, message){
			if(err){
    			return console.error(err.message);
  			}
  				console.log("Message id is " + message.id);});
		}
  	});

	
}

exports.directions = directions;