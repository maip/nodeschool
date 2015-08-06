var fs = require('fs');
var path = require('path');
args = process.argv;
dir = args[2];
fileExt = args[3];
fileExt = ".".concat(fileExt);

fs.readdir(dir, function printFiles(err, fileNames) {
	var len = fileNames.length;
	for (var i = 0; i < len; i++) {
		if (path.extname(fileNames[i]) == fileExt) {
			console.log(fileNames[i])
		}
	}	
})
