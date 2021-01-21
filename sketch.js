var canvas;
var music;
var rect1,rect2,rect3,rect4;
var box;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
     rect1 = createSprite(200,400,100,15);
    rect1.shapeColor="pink";

    var rect2 = createSprite(400,400,100,15);
    rect2.shapeColor="skyblue";
 
    var rect3 = createSprite(300,400,100,15);
    rect3.shapeColor="lightgreen";

    var rect4 = createSprite(500,400,100,15);
    rect4.shapeColor="lightyellow";
    

 
   
}

function draw() {
    background("black");
   edges= createEdgeSprites();
    box.bounceOff(edges);
   if(keyDown("down")){
       box.velocityY=box.velocityY+1;
   }
   if(keyDown("up")){
    box.velocityY=box.velocityY-1;
}
if(keyDown("left")){
    box.velocityX=box.velocityX-1;
}
if(keyDown("right")){
    box.velocityX=box.velocityX+1;
}
  box.bounceOff(rect1);
 
  

  
  
drawSprites();
}
