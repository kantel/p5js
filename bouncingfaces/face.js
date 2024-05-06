class Face {

  constructor () {
    this.r = random(12, 24);
    let x = random(this.r, width - this.r);
    let y = random(this.r, height - this.r);
    this.loc = createVector(x, y);
    let velx = random(-3, 3);
    let vely = random(-3, 3);
    this.vel = createVector(velx, vely);
    const faceImages = [face01, face02, face03];
    this.im = random(faceImages);
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
    image(this.im, this.loc.x, this.loc.y, 2*this.r, 2*this.r);
  }
}
