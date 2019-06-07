var os = require('os');

var http = require('http');
var handleRequest = function(request, response) {
  response.writeHead(200);
  response.end("Hello World! Service Account Test  "+os.hostname() +" \n");

  //log
  console.log("["+
		Date(Date.now()).toLocaleString()+
		"] "+os.hostname());
}
var www = http.createServer(handleRequest);
www.listen(8080);
