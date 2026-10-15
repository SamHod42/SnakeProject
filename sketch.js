const GRID_SIZE = 20;
let headX;
let headY;
let foodX;
let foodY;
let direction = "right";
let gameOver = false;

function setup(){
    createCanvas(600,600)
    frameRate(3)
    headX = 300
    headY = 300
    foodX = newFoodCoordinate()
    foodY = newFoodCoordinate()
}

function draw(){
    background(0)
    rectMode(CORNER)
    square(headX,headY,GRID_SIZE)
    circle(foodX,foodY,GRID_SIZE)
    if (!gameOver) {
    if (direction ==="right"){
        headX = headX + GRID_SIZE;
    }
    if (direction ==="left"){
        headX = headX - GRID_SIZE;
    }
    if (direction ==="up"){
        headY = headY - GRID_SIZE;
    }
    if (direction ==="down"){
        headY = headY + GRID_SIZE;
    }
    }
    if (isOutOfBounds(headX,0,600)){
        headX = headX;
        gameOver = true;
    }
    if (isOutOfBounds(headY,0,600)){
        headY = headY;
        gameOver = true;
    }
    if (gameOver === true){
        background(255,0,0);
    }
}

function keyPressed() {
    console.log(keyCode)
    console.log(direction)
    if (key === UP_ARROW || key ==="w"){
        direction = "up";
    }
    if (key === DOWN_ARROW || key ==="s"){
        direction = "down";
    }
    if (key === LEFT_ARROW || key ==="a"){
        direction = "left";
    }
    if (key === RIGHT_ARROW || key ==="d"){
        direction = "right";
    }
}
function newFoodCoordinate(){
    return floor(random(0, width/GRID_SIZE)) * GRID_SIZE + 10;
}
      
function isOutOfBounds(coordinate,minVal,maxVal){
    return coordinate < minVal || coordinate > maxVal;
}