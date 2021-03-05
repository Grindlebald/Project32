const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var score = 0;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(390,270,165,20);
    

    box1 = new Box(330,235,30,40);
    box2 = new Box(360,235,30,40);
    box3 = new Box(390,235,30,40);
    box4 = new Box(420,235,30,40);

    box5 = new Box(450,235,30,40);
    box6 = new Box(360,195,30,40);
    box7 = new Box(390, 195,30,40);

    box8 = new Box(420,195,30,40);
    box9 = new Box(390,155,30,40);
  

    bird = new Bird(150,160);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:150, y:160});
}

function draw(){
    if (backgroundImg)
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    text("SCORE "+score,750,40)
    box1.display();
    box2.display();
    ground.display();
    
   

    box3.display();
    box4.display();
   
   

    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    
    
    getBackgroundImg();
    bird.display();
   
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if (keyCode===32){
        slingshot.attach(bird.body)
    }
}
async function getBackgroundImg(){
    var response= await fetch("http://worldtimeapi.org/api/timezone/America/Los_Angeles");
    var responseJSON = await response.json();
    console.log(responseJSON);
    var datetime = responseJSON.datetime;
    console.log(datetime);
    var hour = datetime.slice(11,13);
    console.log(hour);
    if (hour>=06 && hour<=19){
        bg="blue"
    }
    else{
        bg="midnightBlue"
    }
    backgroundImg=bg
    console.log(backgroundImg)
}
