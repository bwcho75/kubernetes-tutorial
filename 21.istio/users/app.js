var express = require('express');
var app = express();

var orders = {
    'id':'terry',
    'name':'terry',
    'orders': [ {'id':'001','totalprice':5000},
              {'id':'002','totalprice':30000}]
}


app.get("/users/:id/orders",function(req,res){
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(orders));
})

var server = app.listen(8081,function(){
  console.log("Users service is started")
});
