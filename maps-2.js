//var gm = require('googlemaps');
var util = require('util');
var gmaputil = require('googlemapsutil');

function directions() {
	//gm.config('key', 'AIzaSyC2sLZa8Y1O2m4iGX8EP2vDZttXvlsyHwk');
	dir = gmaputil.directions('Raleigh,NC', 'Charlotte,NC');
}

exports.directions = directions;