var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('serverdispatcher', function(val){
      console.log('wysyła na serwerze');
    io.emit('serverdispatcher',val);
  });

});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
