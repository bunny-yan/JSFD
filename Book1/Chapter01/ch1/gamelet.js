/*
Gamelet: a starting point for writing games
Author: Lexie Tillery
Version: 1.0

Instructions:
Include gamelet.js in an HTML document containing an element with an ID
of 'ball'.
The script will detect when the left or right arrow key is pressed
and will move the ball element accordingly 
*/

const ball = document.getElementById('ball'); //get the ball
document.addEventListener('keydown', handleKeyPress); //listen for keys
let position = 0; // set the initial position


function handleKeyPress(e) {
    if (e.code === 'ArrowLeft') {
        position = position - 10;
    }
    if (e.code === 'ArrowRight') {
        position = position + 10;
    }
    if (e.code === 'ArrowDown') {
        position = position - 10;
    }
    if (e.code === 'ArrowUp') {
        position = position + 10;
    }
    if (position < 0) {
        position = 0;
    }
    
    refresh(); //updates the ball's position 
}
function refresh() {
    ball.style.top = position;
    ball.style.top = position + 'px';
    
}