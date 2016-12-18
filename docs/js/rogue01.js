var rogue0, rogue1;
var posx, posy;

function preload() {
    rogue0 = loadImage("../images/rogue0.png");
    rogue1 = loadImage("../images/rogue1.png");
    frameRate(30);
}

function setup() {
    var myCanvas = createCanvas(320, 240);
	myCanvas.parent("rogue01");
    posx = 160
    posy = 112
}

function draw() {
    background("green");
    if ((frameCount % 30) < 15) {
        image(rogue0, posx, posy);
    }
    else {
        image(rogue1, posx, posy);
    }
    if (keyIsPressed) {
        if ((keyCode == LEFT_ARROW) && (posx > 0)) {
            posx = posx - 16;
        } else if ((keyCode == RIGHT_ARROW) && (posx < width-16)) {
            posx = posx + 16;
        } else if ((keyCode == UP_ARROW) && (posy > 0)) {
            posy = posy - 16;
        } else if ((keyCode == DOWN_ARROW) && (posy < height-16)) {
            posy = posy + 16;
        }
    }
}