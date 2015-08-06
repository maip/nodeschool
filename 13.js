var fs = require('fs')
var net = require('net')
var http = require('http')
var url = require('url')
var strftime = require('strftime')

var server = http.createServer(function (req, res) {
	if (req.method == 'GET') {
		var values = url.parse(req.url, true);
		if (values['pathname'] == '/api/parsetime') {
			var date = new Date(values['query']['iso']);
			var json_res = { 'hour': date.getHours(), 'minute': date.getMinutes(), 'second': date.getSeconds() };
			res.writeHead(200, { 'Content-Type': 'application/json' });
	 		res.end(JSON.stringify(json_res))
		}
		if (values['pathname'] == '/api/unixtime') {
			var date = new Date(values['query']['iso']);
			var json_res = { 'unixtime': date.getTime() };
			res.writeHead(200, { 'Content-Type': 'application/json' });
	 		res.end(JSON.stringify(json_res))
		}
	}
});

server.listen(process.argv[2])
