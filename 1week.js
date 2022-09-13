let antonyms;
function setup() {
  createCanvas(150,150);
  antonyms=new walker();
}

function draw() {
  background("purple");
  antonyms.update();
  antonyms.display();
}
class walker{
   constructor() {
  	this.x = width/2;
  	this.y = height/2;
  }
  update(){
  this.x+=random(-5,5);
this.y+=random(-5,5);
  }
  display(){
    textSize(20);
    fill("fae");
    if((this.x>=width-5)||(this.y>=height-5)){
      background("black");
      text('The End',width/2,height/2);
      return 0;
    }
    text('good',this.x,this.y);
    text('bad',this.y,this.x);
  
  }
}
