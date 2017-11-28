var express = require('express');
var app = express();
var fs = require('fs');

app.get('/getUsers', function(req, res) {
  fs.readfile(__dirname + '/' + "user.json", 'utf8', function(err, data) {
    console.log( data );
    res.end( data );
  });
});

var server = app.listen( process.env.PORT, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Node REST service application listening at port: %s", port );
});
 
