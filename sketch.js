var space;
var spacecraft,spacecraftlr,spacecraftr,spacecraftl;
var iss1,iss;
var hasDocked;

function preload() {
  space.loadImage("spacebg.jpg");
  spacecraft.loadImage("spacecraft1.png");
  spacecraftlr.loadImage("spacecraft2.png");
  spacecraftl.loadImage("spacecraft3.png");
  spacecraftr.loadImage("spacecraft4.png");
  iss1.loadImage("iss.png");
}

function setup() {
  createCanvas(800,400);
  iss.createSprite(400, 200, 50, 50);
  iss.addImage("iss",iss1);
  
}



function draw() {
  background("space");

  if(!hasDocked)  {
    spacecraft1.x =500;
  }

  hasDocked : false;

  if(spacecraft.isTouching (iss))  {
    hasDocked : true
    Text("Docking Successful",750,200);
  }
  drawSprites();
}


function keyDown(LEFT_ARROW)  {
spacecraft.x = spacecraft.x - 3;
spacecraft.addImage("spacecraft",spacecraftl);
}

function keyDown(RIGHT_ARROW)  {
spacecraft.x = spacecraft.x + 3;
spacecraft.addImage("spacecraft",spacecraftr);
}

function keyDown(DOWN_ARROW)  {
spacecraft.addImage(spacecraft,spacecraftlr);
}

function keyDown(LEFT_ARROW)  {
spacecraft.x = spacecraft.y + 3;
 }