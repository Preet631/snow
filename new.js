var bgImg
var snowflake
var snowflakeImg


function preload(){
  bgImg = loadImage("snow2.jpg")
  snowflakeImg = loadImage("snow4.webp")
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(bgImg);  
  drawSprites();
  createSnowflakes()
}
function createSnowflakes(){
  if(frameCount%10 === 0){
    snowflake = createSprite(random(0,800),0,50,50)
    snowflake.addImage(snowflakeImg)
    snowflake.velocityY=5
    snowflake.velocityX =-2
    snowflake.scale = 0.2
  }
}