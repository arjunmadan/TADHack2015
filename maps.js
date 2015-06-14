//Required modules
var request = require('request');
var catapult = require("node-bandwidth");

var client = new catapult.Client("userId", "apiToken", "apiSecret");

catapult.Client.globalOptions.apiToken = "t-nvaioxjgpz2ue4kjsohwisa";
catapult.Client.globalOptions.apiSecret = "dvm7nlr5ksdybtgqfzxx6fgabzewv7c372zxcri";
catapult.Client.globalOptions.userId = "u-ijxrm4pft4kdpnq4kti4un";

var API_KEY = 'AIzaSyC2sLZa8Y1O2m4iGX8EP2vDZttXvlsyHwk';

var url = 'https://maps.googleapis.com/maps/api/directions/json?'

function directions(origin, destination, replyTo) {
	
	var query = 'origin=' + origin + '&destination=' + destination + '&key=' + API_KEY;
	
	console.log(encodeURI(url + query));
	request(url + query, function(error, response, body) {
		//console.log(body);
		test = JSON.parse(body);
  		temp = test['routes'][0]['legs'][0]['steps'];
  		console.log(temp);
  		var str = '';
  		for(i = 0; i < temp.length; i++)
		{
			str += temp[i]['html_instructions'] + " for " + temp[i]['distance']['text'];
			str = str.replace(/<br>/gi, "\n");
			str = str.replace(/<p.*>/gi, "\n");
			str = str.replace(/<a.*href="(.*?)".*>(.*?)<\/a>/gi, "\n");
			str = str.replace(/<(?:.|\s)*?>/g, "");
			str += '\n';
		}
		console.log(str);
		catapult.Message.create({from: "+12525130313", to: replyTo, text: str}, function(err, message){
			if(err){
    			return console.error(err.message);
  			}
  				console.log("Message id is " + message.id);});
  	});

	
}

exports.directions = directions;