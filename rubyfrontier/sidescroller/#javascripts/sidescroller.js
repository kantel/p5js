// Sidescroller 1

const bighills = [];
const smallhills = [];

function setup() {
	const myCanvas = createCanvas(800, 450);
	myCanvas.parent("myCanvas");
	for (let i = 0; i < 3; i++) {
		bighills.push(new Hill(i*400, 200, -2, "#63e06b"));
	}
	for (let i = 0; i < 6; i++) {
		smallhills.push(new Hill(i*200, 100, -3, "#217424"));
	}
	noStroke()
}

function draw() {
	background(64, 176, 226);
	// Große Hügel im Hintergrund
	for (let bighill of bighills) {
		bighill.update();
		bighill.show();
	}
	// Kleine Hügel davor
	for (let smallhill of smallhills) {
		smallhill.update();
		smallhill.show();
	}
	// Erdboden
	fill("#ffd05e");
	rect(0, 400, width, 50)
}

