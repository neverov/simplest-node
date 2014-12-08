var http = require('http');

var port = process.env.PORT | 8888; 
http.createServer(function(req, resp) {
  resp.writeHead(200, {'Content-Type': 'text/plain'});
  resp.write('ohai');
  resp.end();
}).listen(port);

console.log('started server on port', port);
