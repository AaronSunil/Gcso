var car,wall;
var speed,weight;
var Deformation;

function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  car.shapeColour = "red";
  wall = createSprite(1200, 200, 60, height/2);
  speed = random(55,90);
  console.log(speed);
  weight = random(400,1500);
  console.log(weight);
  Deformation = 0;
}

function draw() {
  background(0, 0, 0);  
  car.velocityX = speed;

  if (car.x - wall.x < car.width+wall.width/2
    &&wall.x - car.x < car.width+wall.width/2)
  {
    speed = 0;

    Deformation = 0.5 * weight * speed * speed/22500;
    if (Deformation <= 100)
    {
      car.shapeColour = (0,255,0);
    }
  }

  drawSprites();
}