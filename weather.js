var request = require('request');

function sendGETRequest(query){
	var url = "http://query.yahooapis.com/";

	var options= {
		hostname: 'query.yahooapis.com',
		path: query,
		method: 'GET'
	};

	request(url + query, function(error, response, body) {
          console.log(body);
      });
}

function getWeather(text){
 	
 	var getQuery = "select item.condition from weather.forecast where woeid in";
 	getQuery+= "(select woeid from geo.places(1) where text=\"";
 	getQuery+= text;
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