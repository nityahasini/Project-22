var starImg,bgImg;
var star, starBody;
var fairy, fairyImage;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
	fairyImage= loadAnimation("images/fairy.png", "images/fairyImage1.png", "images/fairyImage2.png");
    fairyVoice= loadSound("sound/JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	//create fairy sprite and add animation for fairy
	fairy= createSprite(200,200,80,80);
	fairy.addAnimation("fairy",fairyImage);
	fairy.scale= 0.3;
   
	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
	
	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}
function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  if(keyDown(LEFT_ARROW)){ 
	fairy.x= fairy.x-5;
}
if(keyDown(RIGHT_ARROW)){
	fairy.x= fairy.x+5;
}
if(keyDown("space")){
    fairyVoice.play();
 }

  //write code to stop star in the hand of fairy
  if(star.y>450 && starBody.position.y>470){
  matter.body.setStatic(starBody,true)
  }
  drawSprites();
}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
}
