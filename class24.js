const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground1=new ground(200,390,1200,10)
     box1 = new Box(400,200,50,50);
    box2 = new Box(300,100,50,50);
     pig1= new pig(200,200)
     log1=new log(501,200,300,PI/2)
}

function draw(){
    background(0);
    Engine.update(engine);
        box2.display();
    box1.display();
    ground1.display();
    log1.display();
    pig1.display();
}
