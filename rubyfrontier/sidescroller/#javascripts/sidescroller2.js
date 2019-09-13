// Sidescroller 2

const aliens = [];
const obstacles = [];
const clouds = [];
const bighills = [];
const smallhills = [];
const obstacleWidth = 70;

function preload() {
	alienwalk1  = loadImage("images/alienwalk1.png");
	alienwalk2  = loadImage("images/alienwalk2.png");
	alienjumps  = loadImage("images/alienjumps.png");
	cactus      = loadImage("images/cactus.png");
	fence       = loadImage("images/fence.png");
	fencebroken = loadImage("images/fenceBroken.png");
}

function setup() {
	const myCanvas = createCanvas(800, 450);
	myCanvas.parent("myCanvas");
	clouds.push(new Cloud(700, -0.25));
	for (let i = 0; i < 3; i++) {
		bighills.push(new Hill(i*400, 200, -0.5, "#c666e6"));
	}
	for (let i = 0; i < 6; i++) {
		smallhills.push(new Hill(i*200, 100, -0.75, "#9757a5"));
	}
	obstacles.push(new Obstacle(width + obstacleWidth, 340))
	aliens.push(new Alien(66, 320));
	noStroke();
}

function draw() {
	background("#95e0f5");
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
	fill("#817ac6");
	rect(0, 400, width, 50)
	// Obstacles
	for (let obstacle of obstacles) {
		obstacle.update();
		obstacle.show();
	}
	// Alien
	for (let alien of aliens) {
		alien.update();
		alien.show();
	}
}

function keyPressed() {
	let alien = aliens[0];
	if (((keyCode === UP_ARROW) || (key === " ")) && (alien.status == "walking")) {
		alien.vely = -5;
		alien.status = "jumping";
	}
	// Für Screenshots
	else if (key === "s") {
		noLoop();
	}
	return false;
}

function touchStarted() {
	let alien = aliens[0];
	if (alien.status == "walking") {
		alien.vely = -5;
		alien.status = "jumping";
	}
	return false;
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
		}
	}
}

// Obstacles

class Obstacle {
	
	constructor(x, y) {
		this.xpos = x;
		this.ypos = y;
		this.im1 = fence;
		this.im2 = fencebroken;
		this.im = this.im1;
		this.step = -2.5;
	}
	
	update() {
		this.xpos += this.step;
		if (this.xpos <= -(obstacleWidth + random(240*obstacleWidth))) {
			if (random() < 0.75) {
				this.im = this.im1;
			} else {
				this.im = this.im2;
			}
			this.xpos = width + obstacleWidth;
		}
	}
	
	show() {
		image(this.im, this.xpos, this.ypos);
	}

}