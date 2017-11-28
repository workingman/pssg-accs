var express = require('express');
var app = express();
var fs = require('fs');
var data = {
  "user1": {
    "name": "Geoff Routledge",
    "department": "Cloud Pursuit",
    "designation": "Architect",
    "id": 1
  },
  "user2": {
    "name": "Jim Knutsen",
    "department": "Sales",
    "designation": "Account Executive",
    "id": 2
  }
}

app.get('/getUsers', function(req, res) {
    console.log( data );
    res.send( data );
});

var server = app.listen( 8881, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Node REST service application listening at port: %s", port );
});
 
