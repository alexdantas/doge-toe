quiet
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
loud

shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh
shh
shh Creating the Canvas and it's Context
shh
shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh

shh Will only run the code when properly loaded
very canvas is $('#screen')[0]

shh Attaching the function to be called when clicked
canvas dose addEventListener with 'click' onCanvasClick false

shh Where we'll draw all the stuff
very context is canvas dose getContext with '2d'

shh Called when the user clicks on the canvas
shh @note Don't use this function, it will call `onBoardClick()` for you.
shh @see onBoardClick
such onCanvasClick much event

    very x is event.clientX - canvas.offsetLeft
    very y is event.clientY - canvas.offsetTop

    very message is 'Clicked on (' + x + ', ' + y + ')'
    plz console.loge with message

    plz onBoardClick with x y
wow


shh Returns a random number between #min and #max
such randomBetween much min max
    very number is (Math.floor(Math.random() * (max-min+1) + min))
wow number

shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh
shh
shh Here we define some global variables userd across the game
shh
shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh

shh Constants to identify which thing is on a tile
very TILE_EMPTY is 0
very TILE_O     is 1
very TILE_X     is 2

shh Dimensions to draw the board
very BOARD_OFFSET_X is 10
very BOARD_OFFSET_Y is 10

shh Dimensions to draw the tiles
very BOARD_WIDTH  is 340
very BOARD_HEIGHT is 340
very TILE_WIDTH   is 100
very TILE_HEIGHT  is 100
very TILE_SPACING is 10

shh Colors for everything
very BOARD_COLOR_BG   is 'rgb(255, 255, 255)'
very TILE_COLOR_EMPTY is 'black'
very TILE_COLOR_X     is 'red'
very TILE_COLOR_O     is 'blue'

shh The game board
shh @note Couldn't use Dogescript syntax to create 2d array.
var board = [
    [TILE_EMPTY, TILE_EMPTY, TILE_EMPTY],
    [TILE_EMPTY, TILE_EMPTY, TILE_EMPTY],
    [TILE_EMPTY, TILE_EMPTY, TILE_EMPTY]
]

shh All possible players
very PLAYER_ONE is 1
very PLAYER_TWO is 2

shh The player that must click right now
very currentPlayer is plz randomBetween with PLAYER_ONE PLAYER_TWO

shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh
shh
shh Now, to the game logic
shh
shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh

shh Draws the tic-tac-toe board on the screen,
shh according to which tile type is on it.
shh
shh (goes through each tile on the global board)
such drawBoard

    shh Clearing the whole board
    context.fillStyle is BOARD_COLOR_BG
    context dose fillRect with 0 0 BOARD_WIDTH BOARD_HEIGHT

    much very counterX as 0 next counterX smaller 3 next counterX more 1
       much very counterY as 0 next counterY smaller 3 next counterY more 1

           very tile is board[counterX][counterY]

           shh How will we draw the tile?
           rly tile is TILE_EMPTY
               context.fillStyle is TILE_COLOR_EMPTY

           but rly tile is TILE_X
               context.fillStyle is TILE_COLOR_X

           but rly tile is TILE_O
               context.fillStyle is TILE_COLOR_O

           wow

           very x is BOARD_OFFSET_X + (counterX * TILE_WIDTH)  + (counterX * TILE_SPACING)
           very y is BOARD_OFFSET_Y + (counterY * TILE_HEIGHT) + (counterY * TILE_SPACING)

           context dose fillRect with x y TILE_WIDTH TILE_HEIGHT
       wow
    wow
wow

shh Gets called when the user clicks on the board.
such onBoardClick much x y
    alert(currentPlayer)

    shh Switches the current player
    rly currentPlayer is PLAYER_ONE
        currentPlayer is PLAYER_TWO
    but
        currentPlayer is PLAYER_ONE
    wow
wow

shh Gets called when the window is fully loaded.
such main
    plz drawBoard
wow


shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh
shh
shh Makes jQuery call that function when the window is fully loaded.
shh @note Couldn't figure out how to make this with Dogescript syntax
shh
shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh shh

$(function() { main() });
