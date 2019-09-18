class Ball {
  
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.loc = createVector(x, y); // Location Vector
    let velx = 0;
    let vely = 1;
    this.vel = createVector(velx, vely); // Velocity Vector
    let gx = 0;
    let gy = 2;
    this.gravity = createVector(gx, gy);  // Gravity Vector
    this.friction = 0.99;
    this.radius = radius;
    
    // Farben
    const a = 200;  // Alpha
    const colors = [color(230, 96, 55, a), color(17, 42, 106, a),
                  color(183, 116, 64, a), color(212, 251, 69, a),
                  color(252, 75, 200, a), color(159, 53, 233, a),
                  color(57, 218, 56, a), color(67, 253, 133, a),
                  color(78, 148, 42, a), color(67, 254, 211, a),
                  color(74, 143, 186, a), color(52, 99, 234, a)]
        // this.c = random(colors);
        this.c = "red";
  }
  
  update() {
    if (this.loc.y + 2*this.radius > height) {
      this.vel.y = -this.vel.y*this.friction;
    } else {
      this.vel.y += this.gravity.y;
    }
    this.loc.y += this.vel.y;
  }
  
  show() {
    fill(this.c);
    circle(this.loc.x, this.loc.y, 2*this.radius);
  }
}
