var express = require('express');
var app = express();
var AlchemyAPI = require('alchemy-api');
var alchemy = new AlchemyAPI('daba2817a502d0ba775bd4066ab559972763e076');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
	var concepts;
	alchemy.concepts('Weather in Raleigh', {}, function(err, res) {
  		if (err) throw err;


		// See http://www.alchemyapi.com/api/concept/htmlc.html for format of returned object
		concepts = res.concepts;
		console.log(JSON.stringify(concepts));
  
});
	response.send(JSON.stringify(concepts));
  
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

