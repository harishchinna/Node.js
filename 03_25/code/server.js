var http = require('http');
var server = http.createServer(function(request, response){
    response.writeHead(200);
    response.end('hello world!');
});
server.listen(7676);