// 引入相应模块
var http = require('http'),
	 url = require('url'),
	path = require('path'),
	  fs = require('fs');
	  
var port = process.argv[2] || 8888;

var types = {
	'mp3': 'audio/mpeg',
    'html': 'text/html',
    'css': 'text/css',
	'js': 'application/javascript'
},
site = 'http://localhost:' + port;

http.createServer(function (request, response) {
    var uri = url.parse(request.url).pathname,
    filename = path.join(__dirname, uri);
    
    fs.exists(filename, function (exists) {
       if (!exists) {
           response.writeHead(404, {'Content-Type': 'text/plain', 'X-my-param':'zcyue'});
           response.write('404 Not Found\n');
           response.end();
           return;
       }

       if(!fs.lstatSync(filename).isDirectory()) {
           var type = filename.split('.');
           type = type[type.length - 1];
           response.writeHead(200, { 'Content-Type': types[type] + '; charset=utf-8' });
           fs.createReadStream(filename).pipe(response);
        } else {
           response.writeHead(301, {'Location': site + '/www/app.html' });
           response.end();
        }
    });
}).listen(parseInt(port, 10));

console.log('Static file server running at\n => ' + site + '/\nCTRL + C to shutdown');
