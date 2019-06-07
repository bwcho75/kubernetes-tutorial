var os = require('os');
var fs = require('fs');

var http = require('http');
var handleRequest = function(request, response) {
  fs.readFile('/tmp/config/profile.properties',function(err,data){
    response.writeHead(200);
    response.end("Read configMap from file  "+data+" \n");
  });

  //log
  console.log("["+
		Date(Date.now()).toLocaleString()+
		"] "+os.hostname());
}
var www = http.createServer(handleRequest);
www.listen(8080);
