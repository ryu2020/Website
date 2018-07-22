//import 'bootstrap';

var express = require('express')
var app = express()
var path = require('path');

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.get('/music', function(req, res) {
  res.sendFile(path.join(__dirname + '/views/music.html'));
});

app.get('/programming', function(req, res) {
  res.sendFile(path.join(__dirname + '/views/programming.html'));
});

app.get('*', function(req, res){
  res.sendFile(path.join(__dirname + '/views/404.html'));
});

app.listen(3000, function(){
  console.log("listening on port 3000")
})
