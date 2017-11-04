var socket;
var ship;
var cnv;
var name;
var playerNum;

function setup() {

 cnv = createCanvas(1000, 1000);
 //translate(width/2, height/2);
 var x = (windowWidth - width) / 2;
 var y = (windowHeight - height) / 2;
 cnv.position(x, y);
  background(51);
  socket = io('http://ec2-18-221-144-51.us-east-2.compute.amazonaws.com:3003/');
  ship = new Avatar();
   socket.on('pos', newDrawing)

   var data = {
     x:ship.pos.x,
     y:ship.pos.y,
     r:ship.r,
     color:ship.color
   }
   socket.emit('start', data)
}

 function newDrawing(data){
  for(var i =0; i< data.length;i++){
    if(data[i].id != socket.id){

background(51)
      var x=data[i].x;
      var y= data[i].y
      var r = data[i].r
      var name = data[i].name;

       textAlign(CENTER);
       textSize(24);

       text(data[i].name, x, y+70)
       fill(data[i].color)
       ellipse(x,y,r)


    }
  }
  }
$(document).ready(function(){
$("#nameButton").click(function(event){
  event.preventDefault()
  var name = $( "#name" ).val();
  if(name == ""){
    name = "No Name";
  }
  ship.name=name;
  $( "#getName" ).slideToggle( "slow")
})

})
function keyPressed(){

  if(keyCode == 65){
    ship.boosting('L')
    //ship.vel.x += -speed;
  }
  //Right
  if(keyCode == 68){
    ship.boosting('R')

  }
  if(keyCode == 87){
    ship.boosting('U');
  }
  if(keyCode == 83){
    ship.boosting('D');
  }

}
function keyReleased(){

  ship.boosting('N');
}


function draw() {

  socket.on('players',function(data){
    if(data.length<=1){
      background(51)
    }
  })
  socket.on('player',function(data){
    if(data.length<=1){
    background(51)
    }
  })
  var data = {
    x:ship.pos.x,
    y:ship.pos.y,
    r:ship.r,
    color:ship.color,
    name:ship.name,

  }
socket.emit('pos', data)


ship.render();
ship.update();
ship.edges();


pop()


//clear()
}
