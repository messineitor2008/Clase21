const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball
var flecha1
var flecha2

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);

var ball_options={
  restitution:0.95,
}
  
ball=Bodies.circle(200,100,20,ball_options)

World.add(world,ball);

flecha1=createImg("right.png")
flecha1.position(220,30)
flecha1.size(50,50)
flecha1.mouseClicked(hforce)

flecha2=createImg("up.png")
flecha2.position(20,30)
flecha2.size(50,50)
flecha2.mouseClicked(vforce)

}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  ellipse(ball.position.x, ball.position.y, 20)
}

function hforce()
{
Matter.Body.applyForce(ball,{x:0, y:0},{x:0.03, y:0})
}

function vforce()
{
Matter.Body.applyForce(ball,{x:0, y:0},{x:0, y:-0.05})
}


