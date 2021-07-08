var pathImg
var boyImg
var paths
var boy
var leftBoundary
var rightBoundary
var edges
function preload(){
  //pre-load images
pathImg = loadImage("path.png")
boyImg = loadAnimation("Runner-1.png", "Runner-2.png")


}

function setup(){
  createCanvas(400,600);
  //create sprites here
  path = createSprite(200, 200)
  path.addImage(pathImg)
  path.scale = 1.33
  path.velocityY = 4
  boy = createSprite(200, 550)
  boy.addAnimation("boyimage", boyImg)
  boy.scale = 0.1
  leftBoundary = createSprite(28, 300, 50, 600)
  leftBoundary.visible = false
  rightBoundary = createSprite(374, 300, 50, 600)
  rightBoundary.visible = false
  edges = createEdgeSprites()

  
}

function draw() {
  
  background(0);
  boy.x = mouseX
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  if (path.y > 600) {
    path.y = height/2
  }
  boy.collide(edges[3])
drawSprites()
}
