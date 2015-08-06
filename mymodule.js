var fs = require('fs');
var path = require('path');
module.exports = function read(dir, fileExt, callback) {
	fs.readdir(dir, function printFiles(err, fileNames) {
		if (err) {
			return callback(err);
		}
		var len = fileNames.length;
		var filteredFileNames = [];
		for (var i = 0; i < len; i++) {
			if (path.extname(fileNames[i]) == ".".concat(fileExt)) {
				filteredFileNames.push(fileNames[i]);
			}
		}	
		return callback(null, filteredFileNames);
	})
} 

