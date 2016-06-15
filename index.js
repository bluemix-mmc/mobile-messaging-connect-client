'use strict';

var request = require("request");

var ConnectClient = function(options){
	this.api_key = options.api_key;

}

module.exports = ConnectClient;