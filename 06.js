var fs = require('fs');
var path = require('path');
var mymodule = require('./mymodule.js');

args = process.argv;
dir = args[2];
fileExt = args[3];

mymodule(dir, fileExt, function (err, list) {
	list.forEach(function (x) {console.log(x)})
});
