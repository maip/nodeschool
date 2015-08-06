var fs = require('fs')

args = process.argv
fs.readFile(args[2], function count(err, lines) {
	line = lines.toString();
	var values = line.split('\n');
	var len = values.length - 1;
	console.log(len)
})
