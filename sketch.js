
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var base1, base2, polygon, ground;
var box1, box2, box3, box4, box5, box6, box7, box8, box9,box10, box12, box13, box14, box15, box16, box17, box18, box19,box20, box21, box22, box23, box24, box25, box26, box27, box28,box29, box30, box31, box32;  
var engine, world;
var slingshot;

function preload(){

    polygonImage = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    ground = new Ground(600,350,1200,20);

    base1 = new Ground(500,300,300,20);
    base2 = new Ground(850,200,300,20);

    block1 = new Box(400,275,30,40);
    block2 = new Box(430,275,30,40);
    block3 = new Box(430,275,30,40);
    block4 = new Box(460,275,30,40);
    block5 = new Box(490,275,30,40);
    block6 = new Box(520,275,30,40);
    block7 = new Box(550,275,30,40);
    block8 = new Box(430,235,30,40);
    block9 = new Box(460,235,30,40);
    block10 = new Box(490,235,30,40);
    block11 = new Box(520,235,30,40);
    block12 = new Box(550,235,30,40);
    block13 = new Box(460,195,30,40);
    block14 = new Box(490,195,30,40);
    block15 = new Box(520,195,30,40);
    block16 = new Box(490,155,30,40);

    block17 = new Box(800,175,30,40);
    block18 = new Box(830,175,30,40);
    block19 = new Box(830,175,30,40);
    block20 = new Box(860,175,30,40);
    block21 = new Box(890,175,30,40);
    block22 = new Box(920,175,30,40);
    block23 = new Box(950,175,30,40);
    block24 = new Box(830,135,30,40);
    block25 = new Box(860,135,30,40);
    block26 = new Box(890,135,30,40);
    block27 = new Box(920,135,30,40);
    block28 = new Box(950,135,30,40);
    block29 = new Box(860,95,30,40);
    block30 = new Box(890,95,30,40);
    block31 = new Box(920,95,30,40);
    block32 = new Box(890,55,30,40);


    slingshot = new Slingshot(this.polygon,{x:100, y:200});
}

function draw(){
    background(0);
    Engine.update(engine);

    imageMode(CENTER);
    image(polygonImage,polygon.position.x,polygon.position.y,40,40);

    ground.display();
    base1.display();
    base2.display();

    slingshot.display();

    fill ("pink");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    fill ("blue");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    fill ("pink");
    block13.display();
    block14.display();
    block15.display();
    fill ("blue");
    block16.display();

    fill ("pink");
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    fill ("blue");
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();
    fill ("pink");
    block29.display();
    block30.display();
    block31.display();
    fill ("blue");
    block32.display();
       
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(this.polygon);
    }
}