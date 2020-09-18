
var monkey , monkey_running;
var banana ,bananaImage;
var obstacle, obstacleImage;
var bananaGroup, obstaclesGroup;
var ground;
var score = 0;
var randomNumber;

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(400,400);
  
  monkey = createSprite(80,325,20,20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.2;
  
  ground = createSprite(400,390,900,20);
  ground.x = ground.width/2;
  ground.velocityX = -4;
  ground.shapeColor = "green";
  
  bananaGroup = new Group();
  obstaclesGroup = new Group();
}


function draw() {

  background("white");
  
  if(ground.x < 0) {
    ground.x = ground.width/2;
  }
  
  if(keyDown("space") && monkey.y > 200) {
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  food();
  obstacles();
  
  score = score + Math.round(frameRate()/60);
  
  fill("black");
  textSize(20);
  text("Survival Time: " + score, 190,25);
  
  drawSprites();
  
}

function food() {
   if(frameCount%80===0) {
    banana = createSprite(400, 300, 20, 20);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
    randomNumber = random(150,250);
    banana.y = randomNumber;
    banana.lifetime = 150;
    bananaGroup.add(banana);
  }
}

function obstacles() {
   if(frameCount%300===0) {
    obstacle = createSprite(400, 350, 20, 20);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -3;
    
    obstacle.lifetime = 150;
    obstaclesGroup.add(obstacle);
  }  
}