const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var j = 0
var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var particle

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(480,695);
    engine = Engine.create();
    world = engine.world;


    ground1 = new Ground(300,695,600,10);
    ground2 = new Ground(0,350,10,700);
    ground3 = new Ground(600,350,10,700);
    ground4 = new Ground(300,0,600,10);

    var num = 480/6
    ground5 = new Ground(0,575,5,350);
    ground6 = new Ground(num,575,5,350);
    ground7 = new Ground(num*2,575,5,350);
    ground8 = new Ground(num*3,575,5,350);
    ground9 = new Ground(num*4,575,5,350);
    ground10 = new Ground(num*5,575,5,350);
    ground11= new Ground(num*6,575,5,350);
    
 
    var num2 = 75
    num = 480/10
    
    divider1 = new Divider(num*1,num2,10)
    divider2 = new Divider(num*2,num2,10)
    divider3 = new Divider(num*3,num2,10)
    divider4 = new Divider(num*4,num2,10)
    divider5 = new Divider(num*5,num2,10)
    divider6 = new Divider(num*6,num2,10)
    divider7 = new Divider(num*7,num2,10)
    divider8 = new Divider(num*8,num2,10)
    divider9 = new Divider(num*9,num2,10)

    num2 = 150
    num =480/11
    divider10 = new Divider(num*1,num2,10)
    divider12 = new Divider(num*2,num2,10)
    divider13 = new Divider(num*3,num2,10)
    divider14 = new Divider(num*4,num2,10)
    divider15 = new Divider(num*5,num2,10)
    divider16 = new Divider(num*6,num2,10)
    divider17 = new Divider(num*7,num2,10)
    divider18 = new Divider(num*8,num2,10)
    divider19 = new Divider(num*9,num2,10)
    divider20 = new Divider(num*10,num2,10)
    //divider21 = new Divider(num*11,num2,10)

    num2 = 225
    num = 480/10
    
    divider1x = new Divider(num*1,num2,10)
    divider2x = new Divider(num*2,num2,10)
    divider3x = new Divider(num*3,num2,10)
    divider4x = new Divider(num*4,num2,10)
    divider5x = new Divider(num*5,num2,10)
    divider6x = new Divider(num*6,num2,10)
    divider7x = new Divider(num*7,num2,10)
    divider8x = new Divider(num*8,num2,10)
    divider9x = new Divider(num*9,num2,10)

    num2 = 300
    num =480/11
    divider10x = new Divider(num*1,num2,10)
    divider12x = new Divider(num*2,num2,10)
    divider13x = new Divider(num*3,num2,10)
    divider14x = new Divider(num*4,num2,10)
    divider15x = new Divider(num*5,num2,10)
    divider16x = new Divider(num*6,num2,10)
    divider17x = new Divider(num*7,num2,10)
    divider18x = new Divider(num*8,num2,10)
    divider19x = new Divider(num*9,num2,10)
    divider20x = new Divider(num*10,num2,10)
    //divider21x = new Divider(num*11,num2,10)

    particle =new Particle(500,0,10)
    //particle.push(new Particle(random(width/2-10,width/2+10),10,10))
    console.log(particle)
}

function draw(){
    background("black");
    Engine.update(engine);
    //strokeWeight(4);
 

    ground1.display();
    ground2.display();
    ground3.display();
    ground4.display();

    ground5.display();
    ground6.display();
    ground7.display();
    ground8.display();
    ground9.display();
    ground10.display();
    ground11.display();
    //log6.display();
    
    
    divider1.display()
    divider2.display()
    divider3.display()
    divider4.display()
    divider5.display()
    divider6.display()
    divider7.display()
    divider8.display()
    divider9.display()
    
    divider10.display()
    divider12.display()
    divider13.display()
    divider14.display()
    divider15.display()
    divider16.display()
    divider17.display()
    divider18.display()
    divider19.display()
    divider20.display()
    //divider21.display()


    divider1x.display()
    divider2x.display()
    divider3x.display()
    divider4x.display()
    divider5x.display()
    divider6x.display()
    divider7x.display()
    divider8x.display()
    divider9x.display()
    
    divider10x.display()
    divider12x.display()
    divider13x.display()
    divider14x.display()
    divider15x.display()
    divider16x.display()
    divider17x.display()
    divider18x.display()
    divider19x.display()
    divider20x.display()
    //divider21x.display()

    text("click anywhere to reload",50,50)  
    
    
    particle.display()
}

function mousePressed(){
      
        particle =new Particle(mouseX,0,10)
    
}