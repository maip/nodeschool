var fs = require('fs');
var http = require('http');

url = process.argv[2];
http.get(url, function callback(response) {
	response.on("data", function (data) {
		line = data.toString();
		console.log(line);	
	}) 
})
