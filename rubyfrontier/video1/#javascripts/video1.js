let movie;

function preload() {
	movie = createVideo("assets/sbahn.mp4");
	movie.hide();
}

function setup() {
	canvas = createCanvas(480, 360);
	canvas.parent("myCanvas");
}

function mousePressed() {
	movie.loop();
}

function draw() {
	background(0);
	tint(250, 0, 100);
	image(movie, 0, 0);
}