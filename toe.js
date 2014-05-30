/* 
  doge toe: doge tic-tac-toe in dogescript

  Homepage: https://github.com/alexdantas/doge-toe
  Author:   Alexandre Dantas (alexdantas) <eu@alexdantas.net>
  License:   WTFPL

  Thanks to the following:

  - The Dogescript language:
    https://github.com/remixz/dogescript
  - Doge game of life:
    https://github.com/eerwitt/doge-game-of-life
  - Get click position on Canvas:
    http://eli.thegreenplace.net/2010/02/13/finding-out-the-mouse-click-position-on-a-canvas-with-javascript/
*/ 

// shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh 
// 
// Creating the Canvas and it's Context 
// 
// shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh 

// Will only run the code when properly loaded 
var canvas = $('#screen')[0];

// Attaching the function to be called when clicked 
canvas.addEventListener('click', onCanvasClick, false);

// Where we'll draw all the stuff 
var context = canvas.getContext('2d');

// Called when the user clicks on the canvas 
// @note Don't use this function, it will call `onBoardClick()` for you. 
// @see onBoardClick 
function onCanvasClick (event) { 

var x = event.clientX - canvas.offsetLeft ;
var y = event.clientY - canvas.offsetTop ;

var message = 'Clicked on (' + x + ', ' + y + ')' ;
console.log(message);

onBoardClick(x, y);
} 


// Returns a random number between #min and #max 
function randomBetween (min, max) { 
var number = (Math.floor(Math.random() * (max-min+1) + min)) ;
return number;
} 

// shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh 
// 
// Here we define some global variables userd across the game 
// 
// shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh 

// Constants to identify which thing is on a tile 
var TILE_EMPTY = 0;
var TILE_O = 1;
var TILE_X = 2;

// Dimensions to draw the board 
var BOARD_OFFSET_X = 10;
var BOARD_OFFSET_Y = 10;

// Dimensions to draw the tiles 
var BOARD_WIDTH = 340;
var BOARD_HEIGHT = 340;
var TILE_WIDTH = 100;
var TILE_HEIGHT = 100;
var TILE_SPACING = 10;

// Colors for everything 
var BOARD_COLOR_BG = 'rgb(255, 255, 255)';
var TILE_COLOR_EMPTY = 'black';
var TILE_COLOR_X = 'red';
var TILE_COLOR_O = 'blue';

// The game board 
// @note Couldn't use Dogescript syntax to create 2d array. 
var board = [
    [TILE_EMPTY, TILE_EMPTY, TILE_EMPTY],
    [TILE_EMPTY, TILE_EMPTY, TILE_EMPTY],
    [TILE_EMPTY, TILE_EMPTY, TILE_EMPTY]
]

// All possible players 
var PLAYER_ONE = 1;
var PLAYER_TWO = 2;

// The player that must click right now 
var currentPlayer = randomBetween(PLAYER_ONE, PLAYER_TWO);

// shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh 
// 
// Now, to the game logic 
// 
// shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh 

// Draws the tic-tac-toe board on the screen, 
// according to which tile type is on it. 
// 
// (goes through each tile on the global board) 
function drawBoard () { 

// Clearing the whole board 
context.fillStyle = BOARD_COLOR_BG 
context.fillRect(0, 0, BOARD_WIDTH, BOARD_HEIGHT);

for ( var counterX  = 0 ; counterX  < 3 ; counterX  += 1 ) {
for ( var counterY  = 0 ; counterY  < 3 ; counterY  += 1 ) {

var tile = board[counterX][counterY];

// How will we draw the tile? 
if (tile  === TILE_EMPTY ) {
context.fillStyle = TILE_COLOR_EMPTY 

} else if (tile  === TILE_X ) {
context.fillStyle = TILE_COLOR_X 

} else if (tile  === TILE_O ) {
context.fillStyle = TILE_COLOR_O 

} 

var x = BOARD_OFFSET_X + (counterX * TILE_WIDTH) + (counterX * TILE_SPACING) ;
var y = BOARD_OFFSET_Y + (counterY * TILE_HEIGHT) + (counterY * TILE_SPACING) ;

context.fillRect(x, y, TILE_WIDTH, TILE_HEIGHT);
} 
} 
} 

// Converts between pixel coordinates and tiles within a board. 
// @return The board index for #x or -1 in case of error. 
// @note I know this is ugly as fuark... 
function pixelToTileX (x) { 

for ( var counter  = 0 ; counter  < 3 ; counter  += 1 ) {
if (x  >= (counter*TILE_WIDTH + counter*TILE_SPACING)  && x  <= (TILE_WIDTH + counter*TILE_WIDTH + counter*TILE_SPACING) ) {
            return counter
} 
} 
return -1;
} 

// Converts between pixel coordinates and tiles within a board. 
// @return The board index for #y or -1 in case of error. 
// @note I know this is ugly as fuark... 
function pixelToTileY (y) { 

for ( var counter  = 0 ; counter  < 3 ; counter  += 1 ) {
if (y  >= (counter*TILE_HEIGHT + counter*TILE_SPACING)  && y  <= (TILE_HEIGHT + counter*TILE_HEIGHT + counter*TILE_SPACING) ) {
            return counter
} 
} 
return -1;
} 

// Gets called when the user clicks on the board. 
function onBoardClick (x, y) { 

// Board inner coordinates 
var boardX = pixelToTileX(x);
var boardY = pixelToTileY(y);

// Interrupt if user didn't click on a valid position 
if (boardX  < 0  || boardY  < 0 ) {
        return;
} 

var message = currentPlayer + ' clicked on ' + pixelToTileX(x) + ' ' + pixelToTileY(y) ;
console.log(message);

// Switches the current player 
if (currentPlayer  === PLAYER_ONE ) {
currentPlayer = PLAYER_TWO 
} else {
currentPlayer = PLAYER_ONE 
} 
} 

// Gets called when the window is fully loaded. 
function main () { 
drawBoard();
} 


// shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh 
// 
// Makes jQuery call that function when the window is fully loaded. 
// @note Couldn't figure out how to make this with Dogescript syntax 
// 
// shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh 

$(function() { main() });


