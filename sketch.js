
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0
var survivalTime = 0
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 600)
  monkey = createSprite(80, 315, 10, 10)
  monkey.addAnimation("running", monkey_running)
  monkey.scale = 0.1
  ground = createSprite(400, 350, 900, 10)
  FoodGroup = new Group()
  obstacleGroup = new Group()
}


function draw() {
  background(220)
  ground.velocityX = -4;
  ground.x = ground.width/2
  createBanana();
  createObstacles();
  if(keyDown("space")&& monkey.y>=250) {
    monkey.velocityY = -12 
  }
  monkey.velocityY = monkey.velocityY + 0.8 
  monkey.collide(ground)
  stroke("white")
  textSize(20);
  fill("white")
  text("Score: " + score, 500, 50)
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 100, 50 )
  drawSprites(); 
}

function createBanana() {
  if (World.frameCount % 80 === 0) {
    banana = createSprite(575, 200, 10, 10)
    banana.addImage(bananaImage)
    banana.y= Math.round(random(120,200))
    banana.scale = 0.1
    banana.velocityX = -4
    banana.lifetime = 150
    FoodGroup.add(banana)
  }
  
}

function createObstacles() {
  if (World.frameCount % 300 === 0) {
    obstacle = createSprite(575, 295, 10, 10)
    obstacle.scale = 0.3
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -5
    obstacle.lifetime = 120
  }
}