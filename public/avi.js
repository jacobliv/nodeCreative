class Avatar{
  constructor(){
    this.pos=createVector(500,500);
    this.r=50;
    this.vel=createVector(0,0)
    this.color = 'rgb(' + Math.floor(Math.random() * 256).toString() + ',' + Math.floor(Math.random() * 256).toString() + ',' + Math.floor(Math.random() * 256).toString() +')'
    this.move=false;

    this.isBoost=false;
    this.name="";
  }
  update(){

    this.pos.add(this.vel);
    this.vel.mult(.98)
  }

  boosting(a){
    if(a=="L"){
      this.vel.x+=-10;
    }else if(a=="R"){
      this.vel.x+=10;
    }else if(a=="U") {
      this.vel.y+=-10;
    }else if(a=="D"){
      this.vel.y+=10;
    }
  }
  boost(){

  }

  edges(){
    if(this.pos.x>width+this.r){
      this.pos.x=-this.r;
    } else if(this.pos.x<-this.r){
      this.pos.x=width +this.r;
    }
    if(this.pos.y>height+this.r){
      this.pos.y=-this.r;
    } else if(this.pos.y<-this.r){
      this.pos.y=height +this.r;
    }
  }
  render(){


    textAlign(CENTER);
    textSize(24);
    fill('white')
    text(this.name, this.pos.x, this.pos.y+70)
    fill(this.color)
    ellipse(this.pos.x,this.pos.y,this.r)

  }
}
