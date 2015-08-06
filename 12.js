var fs = require('fs')
var http = require('http')
var map = require('through2-map')

var server = http.createServer(function (req, res) {
	if (req.method == 'POST') {
		var line = '';

		req.on('data', function (chunk) {
			line += chunk.toString().toUpperCase();
		});
		req.on('end', function() {res.end(line)});
	}
})
server.listen(process.argv[2])
