var rogue0, rogue1;
var posx, posy;

function preload() {
    rogue0 = loadImage("../images/rogue0.png");
    rogue1 = loadImage("../images/rogue1.png");
    frameRate(30);
}

function setup() {
    var myCanvas = createCanvas(320, 240);
    myCanvas.parent("rogue02");
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
}

function keyTyped() {
    if ((key == "j") && (posx > 0)) {
        posx = posx - 16;  // nach links
    } else if ((key == "l") && (posx < width-16)) {
        posx = posx + 16;  // nach rechts
    } else if ((key == "k") && (posy > 0)) {
        posy = posy - 16;  // nach oben
    } else if ((key == "m") && (posy < height-16)) {
        posy = posy + 16; // nach unten
    }
}