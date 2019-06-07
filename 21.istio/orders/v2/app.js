var express = require('express');
var app = express();

var orders = {
  "001":{
    "id":"001",
    "date":"2018-09-01",
    "userid":"terry",
    "totalprice":3000,
    "status":"complete",
    "products":[{
      "productid":"a001",
      "quantity":5,
      "price":1000
     },
     {
       "productid":"a002",
       "quantity":2,
       "price":2000
     }
    ]
  },
  "002":{
    "id":"002",
    "date":"2018-09-18",
    "userid":"terry",
    "totalprice":10000,
    "status":"shipping",
    "products":[{
      "productid":"a092",
      "quantity":3,
      "price":9000
     },
     {
       "productid":"a072",
       "quantity":1,
       "price":1000
     }
    ]
  }
}


app.get("/orders/:id",function(req,res){
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(orders[req.params.id]));
})

var server = app.listen(8082,function(){
  console.log("Orders service v2 started")
});
