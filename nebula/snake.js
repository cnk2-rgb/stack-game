//constants for the board
var gridSize = 20;
var num_rows = 30;
var num_cols = 70;
var board;
var context;

var eaten = 0;
var br = eaten + 8
var grw = gridSize + (2 * eaten)

var gameOver = false;

//jimmy!
var jimmys_xcoord = gridSize * 5;
var jimmys_ycoord = gridSize * 14;

var jimmy_vel_x = 0;
var jimmy_vel_y = 0;


//other stardust
var stdust_xcoord;
var stdust_ycoord;

window.onload = function() {
    board = document.getElementById("board");
    board.height = num_rows * gridSize;
    board.width = num_cols * gridSize;
    context = board.getContext("2d");

    placeStdust();
    document.addEventListener("keyup", changeDirection);
    setInterval(update, 1000/10);
}

function update() {
    if (gameOver) {
        context.fillStyle = "gold";
        context.fillRect(0, 0, board.width, board.height);
        return;
    }

    context.fillStyle = "black";
    context.fillRect(0, 0, board.width, board.height);
  
    context.fillStyle = "purple";
    context.fillRect(stdust_xcoord, stdust_ycoord, gridSize, gridSize);

    
    if ((jimmys_xcoord >= (stdust_xcoord - br) && jimmys_xcoord <= (stdust_xcoord + br))
         && (jimmys_ycoord >= (stdust_ycoord - br) && jimmys_ycoord <= stdust_ycoord + br)) {
        eaten += 1
        if (eaten >= 12) {
            gameOver = true;
        }
        
        placeStdust();
        br = (2 * eaten) + 8;
        grw = gridSize + (eaten * eaten);
    } else if (jimmys_xcoord > board.width || jimmys_xcoord < 0) {
        jimmy_vel_x = (0 - jimmy_vel_x);
    } else if (jimmys_ycoord > board.height || jimmys_ycoord < 0) {
        jimmy_vel_y = (0 - jimmy_vel_y);
    }

    context.fillStyle = "gold";
    jimmys_xcoord += jimmy_vel_x;
    jimmys_ycoord += jimmy_vel_y;
    context.fillRect(jimmys_xcoord, jimmys_ycoord, grw, grw);

}

function changeDirection(e) {
    if (e.code == "ArrowUp") {
        jimmy_vel_x += 0;
        jimmy_vel_y += -2;
    } else if (e.code == "ArrowDown") {
        jimmy_vel_x += 0;
        jimmy_vel_y += 2;
    } else if (e.code == "ArrowLeft") {
        jimmy_vel_x += -2;
        jimmy_vel_y += 0;
    } else if (e.code == "ArrowRight") {
        jimmy_vel_x += 2;
        jimmy_vel_y += 0;
    }
}

function placeStdust() {
    stdust_xcoord = Math.floor(Math.random() * num_cols) * gridSize;
    stdust_ycoord = Math.floor(Math.random() * num_rows) * gridSize;
}