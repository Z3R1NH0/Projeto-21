const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

var engine,world;

var floor;

var parede_1,parede_2;

var inv

var parede_3,parede_4;

function setup() {
	createCanvas(400,400);
	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		resitution: 0.3,
		friction: 0,
		density: 0.9
	}

	ball = Matter.Bodies.circle(100, 330, 20, ball_options)

	floor = new Ground(200,398,500,10);
	parede_1 = new Ground(270,366,10,50);
	parede_2 = new Ground(350,366,10,50);
	parede_3 = new Ground(399,200,10,400);
	parede_4 = new Ground(1,200,10,400);

	inv = createImg ("right.png");
	inv.position (200,100);
	inv.size (100,100);
	inv.mouseClicked(xForce);


	//Create the Bodies Here.
	Engine.run(engine);

	World.add(world,ball);

}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0)

  fill ("white");
  ellipseMode (RADIUS);
  ellipse(ball.position.x,ball.position.y,20);


  floor.display();
  parede_1.display();
  parede_2.display()
  parede_3.display();
  parede_4.display();
 
}

function xForce (){
	Matter.Body.applyForce(ball,{x:0, y:0}, {x:1.7, y:-16});
}