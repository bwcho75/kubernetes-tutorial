var express = require('express');
var app = express();
var httpClient = require("request");
var async = require('async');

var usersHost = process.env.USERS_HOST
var usersPort = process.env.USERS_PORT
var ordersHost = process.env.ORDERS_HOST
var ordersPort = process.env.ORDERS_PORT
var usersService = "http://"+usersHost+":"+usersPort;
var ordersService = "http://"+ordersHost+":"+ordersPort;

app.get("/baskets/:id",function(req,res){
  var userid = req.params.id;
  res.set('Content-Type', 'text/html')

  httpClient.get(usersService+"/users/terry/orders",function(error,response,body){
    var users = JSON.parse(body);
    var name = users.name; // user name
    var orders = users.orders;
    res.write("Welcome :"+name+"<BR>");
    res.write("Here is your order details<BR>");

    async.forEach(orders,function(value,callback){
        orderid = value.id;
        httpClient.get(ordersService+"/orders/"+orderid,function(error,response,body){
          console.log("call to :"+ordersService+"/orders/"+orderid);
          var order = JSON.parse(body);
          res.write("<P>");
          res.write("ID :"+order.id+"<BR>");
          res.write("Total :"+order.totalprice+"<BR>");
          products = order['products'];
          if(products!= null){
            products.forEach(function(product){
              res.write(
                      "<font color=red>"
                      +"productid:"+product.productid
                      +" quantity:"+product.quantity
                      +" price:"+product.price
                      +"</font> <BR>");
            });
          }
          callback();
        }); // httpClient
      },function(err){
        res.end();
      });// async
  });// httpClient
})

var server = app.listen(8080,function(){
  console.log("basket service started")
});
