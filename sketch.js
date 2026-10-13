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
    foodX = random(GRID_SIZE,width-GRID_SIZE)
    foodY = random(GRID_SIZE,height-GRID_SIZE)
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
    if (headX+20>width){
        headX = headX - 20;
        gameOver = true
    }
    if (headY+20>height){
        headY = headY - 20;
        gameOver = true
    }
    if (headX-20<0){
        headX = headX + 20;
        gameOver = true
    }
    if (headY-20<0){
        headY = headY + 20;
        gameOver = true
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
