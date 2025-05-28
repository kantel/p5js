class Sheep {
  
  constructor(_x, _y) {
    this.x = _x;
    this.y = _y;
    this.radius = 8;
  }
  
  update() {
    this.x += random([-this.radius, this.radius]);
    this.y += random([-this.radius, this.radius]);
    if (this.x > width - this.radius) {
      this.x = width - this.radius;
    }
    if (this.x <= this.radius) {
      this.x = this.radius;
    }
    if (this.y > height - this.radius) {
      this.y = height - this.radius;
    }
    if (this.y <= this.radius) {
      this.y = this.radius;
    }
  }
  
  display() {
    fill(255, 255, 255);
    circle(this.x, this.y, this.radius);
  }
}
