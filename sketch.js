var fixedRect, movingRect;
var car,wall

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car=createSprite(100,200,20,20)
  car.shapeColor="blue"
  wall=createSprite(400,200,10,100)
  wall.shapeColor="brown"
car.velocityX=2
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(isTouching(car,wall)){
  car.shapeColor="pink"
  wall.shapeColor="blue"
}
  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor="yellow"
    fixedRect.shapeColor="orange"
  }
  drawSprites();
}
