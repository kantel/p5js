// Sidescroller 1

const aliens = [];
const clouds = [];
const bighills = [];
const smallhills = [];

function preload() {
	alienwalk1 = loadImage("images/alienwalk1.png");
	alienwalk2 = loadImage("images/alienwalk2.png");
	alienjumps = loadImage("images/alienjumps.png");
}

function setup() {
	const myCanvas = createCanvas(800, 450);
	myCanvas.parent("myCanvas");
	clouds.push(new Cloud(700, -0.25));
	for (let i = 0; i < 3; i++) {
		bighills.push(new Hill(i*400, 200, -0.5, "#63e06b"));
	}
	for (let i = 0; i < 6; i++) {
		smallhills.push(new Hill(i*200, 100, -0.75, "#217424"));
	}
	aliens.push(new Alien(66, 320));
	noStroke();
}

function draw() {
	background(64, 176, 226);
	// Langsame Wolke ganz im Hintergrund
	for (let cloud of clouds) {
		cloud.update();
		cloud.show();
	}
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
	// Alien
	for (let alien of aliens) {
		alien.update();
		alien.show();
	}
}

function keyPressed() {
	let alien = aliens[0];
	if (((keyCode === UP_ARROW) || (key === "w")) && (alien.status == "walking")) {
		alien.vely = -6;
		alien.status = "jumping";
	}
}

// Hintergrund-Objekte

class Cloud {
	
	constructor(x, s) {
		this.xpos = x;
		this.step = s;
	}
	
	update() {
		this.xpos += this.step;
		if (this.xpos <= -200) {
			this.xpos = width + 200;
		}
	}
	
	show() {
		fill("#ffffff");
		ellipse(this.xpos, 150, 100);
		ellipse(this.xpos, 200, 100);
		ellipse(this.xpos - 50, 200, 100);
		ellipse(this.xpos + 50, 200, 100);
	}
}

class Hill {
	
	constructor(x, r, s, c) {
		this.xpos = x;
		this.radius = r;
		this.step = s;
		this.col = c;
	}
	
	update() {
		this.xpos += this.step;
		if (this.xpos <= -this.radius) {
			this.xpos = width + this.radius;
		}
	}
	
	show() {
		fill(this.col);
		ellipse(this.xpos, 400, 2*this.radius);
	}
}

// Sprites

class Alien {
	
	constructor(x, y) {
		this.xpos = x;
		this.ypos = y;
		this.status = "walking";
		this.im1 = alienwalk1;
		this.im2 = alienwalk2;
		this.im3 = alienjumps;
		this.count = 0;
		this.vely = 0;
	}
	
	update() {
		if (this.status == "jumping") {
			this.vely += 0.1;
		}
	}
	
	show() {
		if (this.status == "walking") {
			this.count += 1;
			if (this.count > 15) {
				this.count = 0;
			}
			if (this.count < 8) {
				image(this.im1, this.xpos, this.ypos);
			} else {
				image(this.im2, this.xpos, this.ypos);
			}
		} else if (this.status == "jumping") {
			this.ypos += this.vely;
			image(this.im3, this.xpos, this.ypos);
			if (this.ypos >= 320) {
				this.ypos = 320;
				this.status = "walking";
				this.vely = 0;
			}
			// console.log(this.ypos)
		}
	}
}