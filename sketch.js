var movingRect, fixedRect, object1, object2, gameObject1, gameObject2;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(200, 200, 80, 80);
  movingRect.shapeColor = "cyan";
  //movingRect.debug = true;
  
  fixedRect = createSprite(400,200,80,80);
  fixedRect.shapeColor = "cyan";
  //fixedRect.debug = true;
  
  gameObject1 = createSprite(50,200,80,80);
  gameObject1.velocityX = 5;

  gameObject2 = createSprite(200,200,80,80);
  gameObject2.velocityX = -5;
}

function draw() {
  background("black");  
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if (isTouching(fixedRect,movingRect)) {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  else{
    movingRect.shapeColor = "cyan";
    fixedRect.shapeColor = "cyan";
  }
  bounceOff(gameObject1,gameObject2);
  
  
  
  drawSprites();
}

