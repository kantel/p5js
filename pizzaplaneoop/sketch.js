const windowWidth = 720;
const windowHeight = 520;
const fps = 60;
let img;
let bg;

class Plane {

  constructor() {
    this.x = 75;
    this.y = 240;
    this.img = img;
    this.speed = 5
  }

  update() {
    if (keyIsPressed) {
      if (keyCode == UP_ARROW) {
        if (this.y > 0) {
          this.y -= this.speed;
        }
      }
      if (keyCode == DOWN_ARROW) {
        if (this.y < height - 30) {
          this.y += this.speed;
        }
    }
  }
}

  display() {
    image(this.img, this.x, this.y);
  }
}

function preload() {
  img = loadImage("images/planered_0.png")
  bg  = loadImage("images/desert.png")
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(fps);
  plane = new Plane();
}

function draw() {
  background(231, 229, 226);  // Wüstenhimmel
  image(bg, 0, 0);
  plane.update();
  plane.display();
}
