var surfer,runner
var road,path
var Iroad1
var Iroad2

function preload(){

  path=loadAnimation("path.png")
  runner=loadAnimation("jake1.png","jake2.png","jake3.png","jake4.png","jake5.png") 

}

function setup(){

  createCanvas(400,400);
  
  road=createSprite(200,200)
  road.addAnimation("way",path)
  road.velocityY=25
  road.scale=1.5 

  Iroad1=createSprite(395,395,10,800)
  Iroad2=createSprite(5,5,10,800)

  
  surfer=createSprite(200,200,20,20)
  surfer.addAnimation("runniing",runner)
  surfer.scale=0.8
  
 
}



function draw() {

  background(0);

  if(road.y > 400){

      road.y=height/5

  }

  surfer.x=World .mouseX

  surfer.collide(Iroad1)
  surfer.collide(Iroad2)

  Iroad1.visible=false
  Iroad2.visible=false

  drawSprites()
}
