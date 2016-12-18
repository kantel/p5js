var bg;
var orc = [];

var frame = 0;
var y = -48;
var x = Math.random() * 620;
// var x = random(0, 620);

function preload() {
    bg = loadImage("../images/field.png");
    orc[0] = loadImage("../images/orc1.png")
    orc[1] = loadImage("../images/orc2.png")
    orc[2] = loadImage("../images/orc3.png")
    orc[3] = loadImage("../images/orc2.png")
}

function setup() {
    var myCanvas = createCanvas(640, 320);
	myCanvas.parent("runningorc20160306");
    frameRate(30)
}

function draw() {
    background(bg);
    frame = frameCount % 4
    y = y + 5;
    if (y >= 320) {
        y = -48;
        x = Math.random() * 620;
        // x = random(0, 620);
    }
    image(orc[frame], x, y);
}
