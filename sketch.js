
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
let engine;
let world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
engine= Engine.create();
world= engine.world;
var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2

}
ball= Bodies.circle(100,200,20,ball_options);
  World.add(world,ball);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground =new Ground(200,390,400,20);
 


	Engine.run(engine);
  ellipseMode(RADIUS);
  rectMode(CENTER);
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
  ground.show();
 ellipse(ball.position.x,ball.position.y,20);
}



