var request = require('request');
var catapult = require("node-bandwidth");

var client = new catapult.Client("userId", "apiToken", "apiSecret");

catapult.Client.globalOptions.apiToken = "t-pdbvtsbm7crefjscsduudxa";
catapult.Client.globalOptions.apiSecret = "zld5gfwxkaclimz2fjm2hzptxol5bwf4cdjujty";
catapult.Client.globalOptions.userId = "u-m53dmzwgoxverwlyhah7wpa";

function sendGETRequest(query){
	var url = "http://query.yahooapis.com/";

	var options= {
		hostname: 'query.yahooapis.com',
		path: query,
		method: 'GET'
	};

	request(url + query, function(error, response, body) {
          console.log(body);
          temp = JSON.parse(body);
          console.log(temp);
          console.log(temp['query']['results']['channel']['item']['description']);
          catapult.Message.create({from: "+12525130313", to: "+19199855863", text: temp[i]['html_instructions'] + " for " + temp['query']['results']['channel']['item']['description']}, function(err, message){...});
      });
}

function getWeather(text){
 	var getQuery = "select * from weather.forecast where woeid in";
 	getQuery+= "(select woeid from geo.places(1) where text=\"";
 	getQuery+= text.substring(22, text.length);
 	getQuery+="\")";

 	console.log('Weather Query:' + getQuery);

 	var encodedQuery = encodeURI(getQuery);
	
	var yahooGetQuery = "/v1/public/yql?q=";
	yahooGetQuery += encodedQuery;
	yahooGetQuery += "&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

	console.log('Yahoo Weather Query: '+ yahooGetQuery);

	sendGETRequest(yahooGetQuery); 

}

exports.getWeather = getWeather;