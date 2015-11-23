var http = require('http');
var expressly = require('./config/express');

var server = http.createServer(function(req, res){
	res.writeHead(200);
	res.end('Hello World');
});
