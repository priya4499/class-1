var box;

function setup() {
  createCanvas(1000,1000);
  box = createSprite(200,200,80,80);
  box.shapeColor=color(227, 177, 242);

}

function draw() 
{
   background(40);

  if (keyIsDown(RIGHT_ARROW)) 
  {
    box.position.x = box.position.x +5;
    background(214, 200, 247);
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    box.position.x= box.position.x -5;
    background(6, 53, 61);
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    box.position.y = box.position.y - 5;
    background(84, 3, 44);
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    box.position.y = box.position.y + 5;
    background(40);
  }

  drawSprites();
}




