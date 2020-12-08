//Create variables here
var dog,happyDog,database,foodS,foodStock;
var dogImg,dogImg2;

function preload()
{
  //load images here
  dogImg = loadImage("dogimg1.png");
}

function setup() {
	createCanvas(500,500);
  
   // dog = createSprite(250,250,10,10);
  
   // hypnoticballPosition = database.ref('Ball/Position');
    
}


function draw() 
{  
  background("cyan");
  image(dogImg,200,200,200,300);


  drawSprites();
  //add styles here
}



