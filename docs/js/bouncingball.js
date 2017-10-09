let ball = [];

function setup() {
	let myCanvas = createCanvas(560, 320);
	myCanvas.parent("bouncingball");
    colorMode(HSB, 255)
    for (var i = 0; i < 20; i++) {
        c = color(random(255), 255, 255);
        ball.push(new Ball(random(0, width), random(0, height), random(20, 50), c));
    }
}

function draw() {
	background(0);
    for (var i = 0; i < ball.length; i++) {
        ball[i].checkEdges();
        ball[i].update();
        ball[i].display();
    }
}

class Ball {

	constructor(x, y, r, c) {
		this.pos = createVector(x, y);
		this.r = r/2;
        this.c = c
        this.vel = createVector(1, 1).mult(random(2, 6));
        this.dir = createVector(1, 1);
	}

	update() {
		this.pos.x += this.vel.x * this.dir.x;
		this.pos.y += this.vel.y * this.dir.y;
	}

	display() {
		noStroke();
        fill(this.c)
		ellipse(this.pos.x, this.pos.y, this.r);
	}

    checkEdges() {
        if (this.pos.x > width - this.r && this.dir.x > 0) {
            this.dir.x *= -1;
        }
        if (this.pos.x < this.r && this.dir.x < 0){
            this.dir.x *= -1;
        }
        if (this.pos.y > height - this.r && this.dir.y > 0) {
            this.dir.y *= -1;
        }
        if (this.pos.y < this.r && this.dir.y < 0) {
            this.dir.y *= -1;
        }
    }
}
