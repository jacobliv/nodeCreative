var express=require('express');
var app=express();
var server = app.listen(3003)
var ships=[];

function Avatar(id,x,y,r,color){
  this.id=id;
  this.x = x;
  this.y= y;
  this.r=r;
  this.color=color;
}

console.log("Server on %s",server.address().port)
// function listen(){
//   var host= server.address().address;
//   var port= server.address().port;
//   console.log('Server running on %s',port )
// }
app.use(express.static('public'));

var socket=require('socket.io');
var io=socket(server);
io.sockets.on('connection',function(socket){

  console.log("New Socket:" + socket.id)

  socket.on('start',function(data){
    ships.push(new Avatar(socket.id, data.x, data.y, data.r, data.heading));

    //console.log(ships)
  })

  socket.on('pos',function(data){
    var ship;
    for(var i =0; i< ships.length; i++){
      if(ships[i].id == socket.id){
        ships[i].x=data.x;
        ships[i].y=data.y;
        ships[i].r=data.r;
        ships[i].color=data.color;
        ships[i].name=data.name;
      }
    }
    io.sockets.emit('players',ships);
    //console.log(ships[0])
    //console.log(ships)
      //console.log(socket.id)
      //io.sockets.emit('pos',ships)

    io.sockets.emit('pos',ships)

  })
  socket.on('disconnect' , function(){

    for(var i =0; i< ships.length; i++){
      if(ships[i].id == socket.id){
        console.log(ships[i].name + " Has Left")
        ships.splice(i,1);
	console.log(ships.length + " players online");
      }

    }
    io.sockets.emit('player',ships);
  })
})
