// Hintergrund-Objekte

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