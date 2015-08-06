var fs = require('fs');
args = process.argv;
line = fs.readFileSync(args[2]).toString();

var values = line.split('\n');
var len = values.length - 1;

console.log(len);
