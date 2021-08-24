var garden,rabbit,leaf;
var gardenImg,rabbitImg,leafImg;

var invboundary1, invboundary2;
var apple,appleImg,applegroup;
var score;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg=   loadImage("apple.png");
  leafImg=    loadImage("orangeLeaf.png");
}

function setup()
{
 createCanvas(400,400);
  
// creating background
garden=createSprite(200,200);
garden.addImage(gardenImg);



//creating rabbit running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


  // creating invisible boundary 1 and 2
  invboundary1=createSprite(0,0,10,800);
  invboundary2=createSprite(400,0,10,800);
  invboundary1.visible=false;
  invboundary2.visible=false;
  edges= createEdgeSprites();
  score=0;
}

  function draw() 
  {
     background(0);
  
 
  rabbit.x=World.mouseX;
  
  // rabbit collide edges 

  rabbit.collide(invboundary1);
  rabbit.collide(invboundary2);
 
 var select_sprites=Math.round(random(1,2));

 //spawn the apples
 if (frameCount % 80  === 0) 
 {  if (select_sprites == 1)
      {
        createApples();
      }
    else
    {
      createLeaves();
    }
  }
  text("Score: " + score,200,100);

   drawSprites();
 }

function createApples()
 {
 //write code here to spawn the apples
  
    apple = createSprite(random(50,350),40,10,10);
   apple.addImage(appleImg);
   
   //apple.X = Math.round(random(60,10))
   apple.scale = 0.05;
   apple.velocityY=8;   
    
   //assigning lifetime to the variable
   apple.lifetime =40;
   
   //adjust the depth
   apple.depth = rabbit.depth
   rabbit.depth = rabbit.depth + 1;
   }
   

  function createLeaves()
 {
 //write code here to spawn the leaves
  
   leaf = createSprite(random(50,350),40,10,10);
   leaf.addImage(leafImg);
   
   //apple.X = Math.round(random(60,10))
   leaf.scale = 0.05;
   leaf.velocityY=6;   
 
   //assigning lifetime to the variable
   leaf.lifetime =60 ;
   
   //adjust the depth
   leaf.depth = rabbit.depth
   rabbit.depth = rabbit.depth + 1;
  
 }
