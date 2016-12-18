var ghost = "👻";
var melroseAbbey;
var x = 320;
var y = 400;
var easing = 0.01;

function preload() {
	melroseAbbey = loadImage("../images/melrose-abbey.jpg");
}

function setup() {
	var myCanvas = createCanvas(640, 360);
	myCanvas.parent("ghost01");
	textSize(40);
}

function draw() {
	background(melroseAbbey);
	var targetX = mouseX;
	var targetY = mouseY;
	x += (targetX - x)*easing;
	if (x >= width - 40) {
		x = width - 40;
	}
	if (x <= 0) {
		x = 0;
	}
	y += (targetY - y)*easing;
	if (y >= height - 4) {
		y = height - 4;
	}
	if (y <= 36) {
		y = 36;
	}
	text(ghost, x, y);
}