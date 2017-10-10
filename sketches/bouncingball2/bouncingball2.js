let ball = [];

function setup() {
    let myCanvas = createCanvas(560, 320);
    myCanvas.parent("bouncingball2");
    colorMode(HSB, 255)
    for (let i = 0; i < 20; i++) {
        c = color(random(255), 255, 255);
        ball.push(new Ball(random(width), random(height), random(15, 30), c));
    }
}

function draw() {
    background(0);
    for (let i = 0; i < ball.length; i++) {
        ball[i].update();
        ball[i].display();
        ball[i].checkEdges();
        for (let j = 0; j < ball.length; j++) {
          if (i != j && ball[i].checkCollision(ball[j])) {
            // ball[i].dir.x *= -1;
            ball[i].dir.y *= -1;
            // ball[j].dir.x *= -1;
            ball[j].dir.y *= -1;
          }
         }
    }
}
class Ball {

    constructor(x, y, d, c) {
        this.pos = createVector(x, y);
        this.r = d/2;
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
        ellipse(this.pos.x, this.pos.y, this.r*2);
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

    checkCollision(otherBall) {
      let d = dist(float(this.pos.x), float(this.pos.y), float(otherBall.pos.x), float(otherBall.pos.y));
      if (d < float(this.r) + float(otherBall.r)) {
        return true;
      } else {
        return false;
      }
    }
}
