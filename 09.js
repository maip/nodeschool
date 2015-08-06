var fs = require('fs')
var http = require('http')
var bl = require('bl')
var async = require('async')

args = process.argv;
url1 = args[2];
url2 = args[3];
url3 = args[4];
var done = 0;
var gdata = [];

function crawl(url, index) {
	http.get(url, function callback(response) {
		response.pipe(bl(function (err, data) {
			done++;
			gdata[index] = data.toString();
			if (done >= 3) {
				gdata.forEach(function (x) { console.log(x) });
			}
			return true;
		}));
	})
}

crawl(url1, 1);
crawl(url2, 2);
crawl(url3, 3);
