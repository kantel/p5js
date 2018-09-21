function setup() {
	var myCanvas = createCanvas(560, 315);
	myCanvas.parent("animation1130")
	fill("#ff0000");
	noStroke();
}

function draw() {
	background(204);
	ellipse(mouseX + 20, mouseY - 20, 30, 30);
