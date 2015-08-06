var fs = require('fs')
var bl = require('bl')
var http = require('http')

url = process.argv[2];
http.get(url, function callback(response) {
	response.pipe(bl(function (err, data) {
		data = data.toString();
		console.log(data.length);
		console.log(data);
	}));

})
