// Modules
var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

var distance;
var servo_transmit;
var hour_transmit;
var min_transmit;
var time;
// Points to index.html to serve webpage
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

// User socket connection
io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  socket.on('set_time', function(hour_set, min_set){
    hour_transmit = hour_set;
    min_transmit = min_set;
    time = hour_transmit + ":" + min_transmit;
    console.log(time);
  });

setInterval( function(){
  const xhr = new XMLHttpRequest();
  const url = "http://group16.ddns.net/ir";
  xhr.open("GET", url);
  xhr.onload = function() {
    distance = xhr.responseText;
    console.log(distance);
  };
  xhr.send();
  io.emit('dist_update', distance);
}, 5000);

  socket.on('servo_mode', function(servo_mode) {
    servo_transmit = servo_mode;
    if (servo_transmit == 1) {
      const xhr1 = new XMLHttpRequest();
      const url = "http://group16.ddns.net/toggleon";
      xhr1.open("GET", url);
      xhr1.send();
  }
  else {
    const xhr2 = new XMLHttpRequest();
    const url = "http://group16.ddns.net/toggleoff";
    xhr2.open("GET", url);
    xhr2.send();
  }
  });
});



// Listening on localhost:3000
http.listen(3000, function() {
  console.log("listening on *:3000");
});
