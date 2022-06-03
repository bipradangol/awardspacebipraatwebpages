var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');
var score = 0;
var  gravity = 1;
var birdY = 200;
var rectX = 300;
var died = false;
document.addEventListener('keydown',moveUp);

function moveUp() {
birdY-=15;
}

function draw(){
    rectX-=gravity;
    birdY+=gravity;
    c.fillStyle = 'cyan';
    c.fillRect(0,0,canvas.width,canvas.height);
    c.fillStyle = 'yellow';
    c.fillRect(100, birdY, 50, 50);
    c.fillStyle = 'green';
    c.fillRect(rectX, 0, 80, 330);
    c.fillStyle = 'green'
    c.fillRect(rectX, 450, 80, 350);
    c.font = '30px Arial';
    c.fillText(score,250, 750);
    if (rectX<=0){
        score+=10;
        rectX=canvas.width;
    }
    if (birdY <= 330 && rectX <= 100+50){
        died = true;
    }
    if (birdY <= 330 && rectX >= 100-80 && rectX <= 100+50){
        died = true;
    }
    if (birdY >= 450-50 && rectX >= 100-80 && rectX <= 100+50){
        died = true;
    }
    if (birdY >= canvas.height - 50){
        died = true;
    }
    if (birdY >= 450 && rectX <= 100+50){
        died = true;
    }
    if (birdY <= 0){
        died = true;
    }
    if (!died){
        requestAnimationFrame(draw);
    }

}
draw();
