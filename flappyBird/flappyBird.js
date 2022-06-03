var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');

var bg = new Image();
var pipeNorth = new Image();
var pipeSouth = new Image();
var bird = new Image();
var fg = new Image();

bg.src = 'images/bg.png';
pipeNorth.src = 'images/pipeNorth.png';
pipeSouth.src = 'images/pipeSouth.png';
bird.src = 'images/bird.png';
fg.src = 'images/fg.png';

var gravity = 1.5;
var pipeX = 180;

var birdY = 150;

document.addEventListener("keydown",moveUp);

function moveUp(){
    birdY -= 25;
}

function draw() {
    c.drawImage(bg, 0, 0);
    c.drawImage(pipeNorth, pipeX, 0);
    c.drawImage(pipeSouth, pipeX, 300);
    c.drawImage(bird, 10, birdY);
    c.drawImage(fg, 0, canvas.height-fg.height);
    pipeX-=1;
    if (pipeX <=0) {
        pipeX = canvas.width;
    }
    birdY+=gravity;
    requestAnimationFrame(draw);
}

draw();