var express = require('express');
var app = express();

var orders = {
  "001":{
    "id":"001",
    "date":"2018-09-01",
    "userid":"terry",
    "totalprice":3000,
    "status":"complete"
  },
  "002":{
    "id":"002",
    "date":"2018-09-18",
    "userid":"terry",
    "totalprice":10000,
    "status":"complete"
  },

}


app.get("/orders/:id",function(req,res){
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(orders[req.params.id]));
})

var server = app.listen(8082,function(){
  console.log("Orders service v1 started")
});
