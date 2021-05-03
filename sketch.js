
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  head = new Roof(400,20,10,550);
bob1 = new Bob(200,400,50/2);
bob2 = new Bob(250,400,50/2);
bob3 = new Bob(300,400,50/2);
bob4 = new Bob(350,400,50/2);
bob5 = new Bob(400,400,50/2);
roof1 = new SlingShot(bob1.body,head.body,-50*2,0);
roof2 = new SlingShot(head.body,bob2.body,-25*2,0);
roof3 = new SlingShot(head.body,bob3.body,0,0);
roof4 = new SlingShot(head.body,bob4.body,25*2,0);
roof5 = new SlingShot(head.body,bob5.body,50*2,0);
}


function draw() {
  background("cyan");
Engine.update(engine);

  head.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display(); 
  roof1.display();
  roof2.display();
  roof3.display();
  roof4.display();
  roof5.display();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-100})
    console.log("hey")
  }
}

