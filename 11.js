var fs = require('fs')
var http = require('http')
var file = process.argv[3];

var server = http.createServer(function (res, req) {
	var stream = fs.createReadStream(file);	
	stream.on('open', function() {
		stream.pipe(req);
	});
})
server.listen(process.argv[2]);
