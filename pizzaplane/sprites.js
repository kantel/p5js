// Class Plane
class Plane {

    constructor() {
      this.x = 75;
      this.y = 240;
      this.img = planImages[0];
      this.frame = 0;
      this.speed = 5
      this.anim  = 0;
    }
  
    update() {
      if (keyIsPressed) {
        if (keyCode == UP_ARROW) {
          if (this.y > 10) {
            this.y -= this.speed;
          }
        }
        if (keyCode == DOWN_ARROW) {
          if (this.y < height - 100) {
            this.y += this.speed;
          }
      }
      return false;
    }
    this.anim += 1;
    if (this.anim >= maxAnim) {
      this.anim = 0;
      this.frame += 1;
      if (this.frame >= 2) {
        this.frame = 0;
      }
      this.img = planImages[this.frame];
    }
  
  }

  display() {
    image(this.img, this.x, this.y);
  }
}

// Class Enemy
class Enemy {

    constructor(_x, _y, _im) {
        this.x = _x;
        this.y = _y;
        this.img = _im;
        this.speed = random(2, 6);
    }

    reset() {
        this.x = width + random(30, 100);
        this.y = random(10, height - 100);
        this.speed = random(2, 6);
    }

    update() {
        this.x -= this.speed;
        if (this.x < - 30) {
            this.reset();
        }
    }

    display() {
        image(this.img, this.x, this.y);
    }
}