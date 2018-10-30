var rogue0, rogue1;
var posx, posy;

function preload() {
    rogue0 = loadImage("data/rogue0.png");
    rogue1 = loadImage("data/rogue1.png");
    frameRate(30);
}

function setup() {
  var mcv = createCanvas(320, 240);
   mcv.parent("myCanvas");
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

function keyPressed() {
    if (((key === "j") || (key === "4")) && (posx > 0)) {
        posx = posx - 16;  // nach links
    } else if (((key === "l") || (key === "6")) && (posx < width-16)) {
        posx = posx + 16;  // nach rechts
    } else if (((key === "k") || (key === "8")) && (posy > 0)) {
        posy = posy - 16;  // nach oben
    } else if (((key === "m") || (key === "5")) && (posy < height-16)) {
        posy = posy + 16; // nach unten
    }
}
