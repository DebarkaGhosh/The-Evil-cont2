var bg1, bg1img;
var howtoplay , howtoplayimg;
var instructions,instructionsimg;
var Continue , Continueimg;
var mainbg , mainbgimg;
var curtain1 ,curtain2 , curtainimg;
var gameState = "START";

var rm,rmimg

function preload(){
 bg1img = loadImage("images/background1.png");
 howtoplayimg = loadImage("images/how to play.png");
 instructionsimg = loadImage("images/instructions.jpg");
 Continueimg = loadImage("images/continue.png");
 mainbgimg = loadImage("images/mainbg2.jpg");
 curtainimg = loadImage("images/curtain.png");

 rmimg = loadAnimation("images/runningman1.png","images/runningman2.png","images/runningman3.png",
 "images/runningman4.png","images/runningman5.png",
 "images/runningman6.png","images/running man7.png","images/runningman8.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  howtoplay = createSprite(679,400,200,100)
  howtoplay.addImage(howtoplayimg);
  howtoplay.scale = 0.35;

  Continue = createSprite(879,550,200,100)
  Continue.addImage(Continueimg);
  Continue.scale = 0.35;

  mainbg = createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight);
  mainbg.addImage(mainbgimg);
  mainbg.scale = 2;

  curtain1 = createSprite(windowWidth/2,300)
  curtain1.addImage(curtainimg);
  curtain1.scale = 1.5;
  curtain1.velocityX = -25;


  curtain2 = createSprite(windowWidth/2,300)
  curtain2.addImage(curtainimg);
  curtain2.scale = 1.5;
  curtain2.velocityX = 25;

  rm = createSprite(200,450,5,5);
  rm.addAnimation("rmimg",rmimg);
  rm.scale = 0.8;
 



  
}

function draw() {
  

  if(gameState === "START"){

            background(bg1img);  
            Continue.visible = false;
           mainbg.visible = false;
           rm.visible = false;
            push();
            fill("red")
            textFont("chiller")
            textSize(90);
            textStyle(BOLD)
            text("Story",windowWidth/2-20,windowHeight/2 - 170);
          pop();
          
          
          fill("red")
          textFont("chiller")
          textSize(36);
          textStyle(BOLD);
          text("Welcome to the game 'Save Me !'. You are Alex trapped in a  " ,380,200)
          text(" haunted house. Try to escape from  the house💀." ,400,250);
          text("Press the 'how to play' button for instructions.", 420,300);
          
            
          if(mousePressedOver(howtoplay)){
          gameState = "PLAY";
          }
  }


  if(gameState==="PLAY"){
          background(instructionsimg);
        howtoplay.visible = false;
        Continue.visible = true;
        mainbg.visible = false;
        rm.visible = false;



        push();
        fill("Red");
        textFont("chiller");
        textSize(60)
        textStyle(BOLDITALIC);
        text(" -: INSTRUCTIONS :- ", 250,windowHeight/2 - 170)
        

        textStyle(BOLD);
        text("1.Press the 'UP ARROW' key to jump. (⬆)", 250, 280);
        text("2.Press the 'RIGHT ARROW' key to run. (➡)",250,350);
        pop();
        if(mousePressedOver(Continue)){
          gameState = "GAME";

        }

} 

 if(gameState === "GAME"){
      background(0);
      Continue.visible = false;
      mainbg.velocityX = -10;
      mainbg.visible = true;
      rm.visible = true;

      if(mainbg.x<0){
        mainbg.x = windowWidth/2;
        
      }
 }
  


drawSprites();
}
