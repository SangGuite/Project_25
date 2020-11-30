
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject,dustbinObject;
var groundObject;

function setup() {
	createCanvas(1000, 700);
	
  engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
	paperObject=new Paper(50,400,70);
  groundObject=new Ground(600,650,1200,20);
  dustbinObject=new Dustbin(766,640);
    
	Engine.run(engine);
  
}


function draw() {
  background("white");
  Engine.update(engine);
  paperObject.display();
  groundObject.display();
  dustbinObject.display();
  drawSprites();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:120,y:-120});
  }
}


