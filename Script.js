let red = 100;
let green = 170;
let blue = 255;
let redDelta = 1;
let greenDelta = 1;
let blueDelta = 1;
setInterval(changeBackground, 100);
function changeBackground() {
    red = red + redDelta;
    green = green + greenDelta;
    blue = blue + blueDelta;
    if (red > 255 || red < 100) {
        redDelta = redDelta * -1;
        red = red + redDelta;
    }
    if (green > 255 || green < 100) {
        greenDelta = -greenDelta;
        green = green + greenDelta;
    }
    if (blue > 255 || blue < 100) {
        blueDelta = -blueDelta;
        blue = blue + blueDelta;
    }
    document.body.style.background ="rgb(" + red + "," + green + "," + blue + ")";
}