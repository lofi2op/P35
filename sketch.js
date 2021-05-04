var dog,happyDog,database,foodS,foodStock;

function preload(){
    dogImg = loadImage("images/dogImg.png")
    dogImg1 = loadImage("images/dogImg1.png")
    dogImg1.resize(150,150);
}

function setup() {
    createCanvas(1000, 1000);

    dog = createSprite(500,500);
    dog.addImage(dogImg)

    database = firebase.database();
    foodStock=database.ref("Food");
    foodStock.on("value",readStock)
  
}


function draw() {  
  background(46,139,87);
  stroke("black")
  fill("white")
  textSize(30)
  text("Hint : To feed the doggo food, press UP Arrow",50,100)

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg1)
  }
  drawSprites();    

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  database.ref("/").update({Food:x})
}