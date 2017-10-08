var ball1, ball2;

function setup() {
  createCanvas(560, 320);
  myCanvas.parent("bouncingball");
  ball1 = new Ball(150, 150, 24);
}

function draw() {
  background(0);
  ball1.update();
  ball1.display();
}

class Ball() {
  
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    // this.c = c;
    this.r = r;
  }
  
  update() {
    this.x += random(-5, 5);
    this.y += random(-5, 5);
  }
  
  display() {
    stroke(255);
    strokeweight(4);
    ellipse(this.x, this.y, this.r);
  }
}