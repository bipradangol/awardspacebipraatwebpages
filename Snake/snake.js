const canvas = document.getElementById("snake");
const c = canvas.getContext("2d");

const box = 32;

const ground = new Image();
ground.src = "https://stackblitz.com/files/js-facfx8/github/bipradangol/awardspacebipraatwebpages/main/Snake/img/ground.png";

const foodImg = new Image();
foodImg.src = "https://stackblitz.com/files/js-facfx8/github/bipradangol/awardspacebipraatwebpages/main/Snake/img/food.png";

let dead = new Audio();
let eat = new Audio();
let up = new Audio();
let right = new Audio();
let left = new Audio();
let down = new Audio();

dead.src = "https://stackblitz.com/files/js-facfx8/github/bipradangol/awardspacebipraatwebpages/main/Snake/audio/dead.mp33";
eat.src = "https://stackblitz.com/files/js-facfx8/github/bipradangol/awardspacebipraatwebpages/main/Snake/audio/eat.mp33";
up.src = "https://stackblitz.com/files/js-facfx8/github/bipradangol/awardspacebipraatwebpages/main/Snake/audio/up.mp33";
right.src = "https://stackblitz.com/files/js-facfx8/github/bipradangol/awardspacebipraatwebpages/main/Snake/audio/right.mp33";
left.src = "https://stackblitz.com/files/js-facfx8/github/bipradangol/awardspacebipraatwebpages/main/Snake/audio/left.mp33";
down.src = "https://stackblitz.com/files/js-facfx8/github/bipradangol/awardspacebipraatwebpages/main/Snake/audio/down.mp33";

let food = {
    x:Math.floor(Math.random()*17+1)*box,
    y:Math.floor(Math.random()*15+3)*box
}

let snake = [];
snake[0] = {
    x: 9 * box,
    y: 10 * box
};
let d;
document.addEventListener("keydown",direction);
function direction(event){
    let key = event.code;
    if (key == 'ArrowLeft' && d != "RIGHT"){
        left.play();
        d = "LEFT";
    }else if (key == 'ArrowUp' && d != "DOWN"){
        up.play();
        d = "UP";
    }else if(key == 'ArrowRight' && d != "LEFT"){
        right.play();
        d = "RIGHT";
    }else if(key == 'ArrowDown' && d != "UP"){
        down.play();
        d = "DOWN";
    }
    console.log('You pressed', d);
}
function collision(head, snake) {
    for (let i = 0; i < snake.length; i++) {
        if (head.x == snake[i].x && head.y == snake[i].y){
            return true;
        }
    }
    return false;
}

function draw() {
    c.drawImage(ground,0,0);

    for (let i = 0; i < snake.length; i++) {
        if (i == 0) {
            c.fillStyle = "green";
        }else {
            c.fillStyle = "white";
        }
        c.fillRect(snake[i].x,snake[i].y,box,box);
        c.strokeStyle = 'red';
        c.strokeRect(snake[i].x,snake[i].y,box,box);
    }

    c.drawImage(foodImg, food.x, food.y);

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (d=="LEFT") snakeX -= box;
    if (d=="RIGHT") snakeX += box;
    if (d=="UP") snakeY -= box;
    if (d=="DOWN") snakeY += box;
    if (snakeX == food.x && snakeY == food.y){
        eat.play();
        food.x = Math.floor(Math.random()*17+1)*box;
        food.y = Math.floor(Math.random()*15+3)*box;
    }else {
        snake.pop()
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    if(snakeX < box || snakeX > 17 * box || snakeY < 3*box || snakeY > 17*box || collision(newHead, snake)){
        d = "NONE";
        dead.play();
    }



    snake.unshift(newHead);


}


let game = setInterval(draw,100);
