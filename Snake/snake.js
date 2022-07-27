/** CONSTANTS **/
const CANVAS_BORDER_COLOUR = 'black';
const CANVAS_BACKGROUND_COLOUR = "white";

// Get the canvas element
var gameCanvas = document.getElementById("gameCanvas");

// Return a two dimensional drawing context
var ctx = gameCanvas.getContext("2d");

function clearCanvas(){
//  Select the colour to fill the canvas
ctx.fillStyle = CANVAS_BACKGROUND_COLOUR;
//  Select the colour for the border of the canvas
ctx.strokestyle = CANVAS_BORDER_COLOUR;
// Draw a "filled" rectangle to cover the entire canvas
ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
// Draw a "border" around the entire canvas
ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);
}

clearCanvas();

let snake = [
  {x: 150, y: 150},
  {x: 140, y: 150},
  {x: 130, y: 150},
  {x: 120, y: 150},
  {x: 110, y: 150},
];

var dx = 10;
var dy = 0;

drawSnake();

document.addEventListener("keydown",alterMovement);

//main();

function clearCanvas(){
//  Select the colour to fill the canvas
ctx.fillStyle = CANVAS_BACKGROUND_COLOUR;
//  Select the colour for the border of the canvas
ctx.strokestyle = CANVAS_BORDER_COLOUR;
// Draw a "filled" rectangle to cover the entire canvas
ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
// Draw a "border" around the entire canvas
ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);
}

function drawSnakePart(snakePart) {
  ctx.fillStyle = 'lightgreen';
  ctx.strokestyle = 'darkgreen';
  ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
  ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

function alterMovement(event){
  const LEFT_KEY = 37;
  const RIGHT_KEY = 39;
  const UP_KEY = 38;
  const DOWN_KEY = 40;
  
  const keyPressed = event.keyCode;
  const goingUp = dy === -10;
  const goingDown = dy === 10;
  const goingLeft = dx === -10;
  const goingRight = dx === 10;
  
  if(keyPressed === UP_KEY && !goingDown){
    dx = 0;
    dy = -10;
  }
  if(keyPressed === DOWN_KEY && !goingUp){
    dx=0;
    dy=10;
  }
  if(keyPressed === LEFT_KEY && !goingRight){
    dx = -10;
    dy = 0;
  }
  if(keyPressed === RIGHT_KEY && !goingLeft){
    dx = 10;
    dy = 0;
  }
  
}

function drawSnake(){
  snake.forEach(
  drawSnakePart
  )
}

function advanceSnake(){
  var head = {x: snake[0].x + dx, y: snake[0].y +dy};
  snake.unshift(head);
  snake.pop();
}

function main() {
  setTimeout(function onTick() {
    clearCanvas();
    advanceSnake();
    drawSnake();
    // Call main again
    main();
  }, 100)
}