
  

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body
var slingShot

function preload()
{
	polygonImg = loadImage("polygon.jpg");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	block8 = new Box(330,235,30,40);
	block9 = new Box(360,235,30,40);
	block10 = new Box(390,235,30,40);
	block11 = new Box(420,235,30,40);
	block12 = new Box(450,235,30,40);
	block13 = new Box(360,195,30,40);
	block14 = new Box(390,195,30,40);
	block15 = new Box(420,195,30,40);
	block16 = new Box(390,155,30,40);
	block1 = new Box(300,275,30,40);
	block2 = new Box(330,275,30,40);
	block3 = new Box(360,275,30,40);
	block4 = new Box(390,275,30,40);
	block5 = new Box(420,275,30,40);
	block6 = new Box(450,275,30,40);
	block7 = new Box(480,275,30,40);
	ground2 = new Ground(390,315,220,10);
	    block17 = new Box(530,195,30,40);
	block18= new Box(560,195,30,40);
	block19 = new Box(590,195,30,40);
	block20 = new Box(620,195,30,40);
	block21 = new Box(650,195,30,40);
	block22 = new Box(560,155,30,40);
	block23 = new Box(590,155,30,40);
	block24 = new Box(620,155,30,40);
	block25 = new Box(590,115,30,40);
    ground3 = new Ground(590,235,220,10);
polygon = Bodies.circle(50,200,20);
World.add(world,polygon);


ellipse(polygon.x, polygon.y, polygon.r);
poly2 = new Polygon(50,200,20);
slingShot = new Slingshot(poly2.body,{x:100,y:200});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(155);

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
	  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
 slingShot.display();
 poly2.display();
 // block16.display();
  ground2.display();
	ground3.display();
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(poly2.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingShot.fly();
}
function keyPressed(){
    if(keyCode===32){
        slingShot.attach(poly2.body);
    }
}

