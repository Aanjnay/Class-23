const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box,box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

  box=new Box(200,200,50,50);
  box2=new Box(230,100,50,100);
  ground=new Ground(200,380,400,10);

    console.log(box2);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    box.display();
    box2.display();
    ground.display();
}