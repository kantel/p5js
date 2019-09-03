let balls = [];
const numOfBalls = 30

function setup() {
	let myCanvas = createCanvas(640, 360);
	myCanvas.parent("myCanvas");
	for (let i = 0; i < numOfBalls; i++) {
		balls.push(new Ball());
	}
}

function draw() {
	background("#2b3e50");
	for (let ball of balls) {
		ball.checkEdges();
		ball.move();
		ball.show();
	}
}

class Ball {

    constructor() {
        this.r = random(7, 15);
		let x = random(this.r, width - this.r);
		let y = random(this.r, height - this.r);
		this.loc = createVector(x, y);
		let velx = random(-3, 3);
		let vely = random(-3, 3);
		this.vel = createVector(velx, vely);
		// Farben
		const a = 200;  // Alpha
		const colors = [color(230, 96, 55, a), color(17, 42, 106, a),
                  color(183, 116, 64, a), color(212, 251, 69, a),
                  color(252, 75, 200, a), color(159, 53, 233, a),
                  color(57, 218, 56, a), color(67, 253, 133, a),
                  color(78, 148, 42, a), color(67, 254, 211, a),
                  color(74, 143, 186, a), color(52, 99, 234, a)]
		this.c = random(colors);
    }
    
    move() {
		this.loc.add(this.vel);
	}
	
	checkEdges() {
		if (this.loc.y >= height - this.r) {
            this.vel.y *= -1;
            this.loc.y = (height - this.r);
        } else if (this.loc.y <= this.r) {
        	this.vel.y *= -1;
			this.loc.y = this.r;
        }
		if (this.loc.x >= width - this.r) {
            this.vel.x *= -1;
			// this.dx = random(-3, 3);
            this.loc.x = (width - this.r);
        } else if (this.loc.x <= this.r) {
        	this.vel.x *= -1;
			this.loc.x = this.r;
        }
	}

    show() {
        noStroke();
        fill(this.c);
        ellipse(this.loc.x, this.loc.y, 2*this.r, 2*this.r);
    }
}
