var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');

var bg = new Image();
var pipeNorth = new Image();
var pipeSouth = new Image();
var bird = new Image();
var fg = new Image();

bg.src = 'https://stackblitz.com/files/js-facfx8/github/bipradangol/awardspacebipraatwebpages/main/Snake/images/bg.png';
pipeNorth.src = 'https://stackblitz.com/files/js-facfx8/github/bipradangol/awardspacebipraatwebpages/main/Snake/images/pipeNorth.png';
pipeSouth.src = 'https://stackblitz.com/files/js-facfx8/github/bipradangol/awardspacebipraatwebpages/main/Snake/images/pipeSouth.png';
bird.src = 'https://stackblitz.com/files/js-facfx8/github/bipradangol/awardspacebipraatwebpages/main/Snake/images/bird.png';
fg.src = 'https://stackblitz.com/files/js-facfx8/github/bipradangol/awardspacebipraatwebpages/main/Snake/images/fg.png';

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