const windowWidth = 720;
const windowHeight = 520;
const fps = 60;
const speed = 5;
let img;
let bg;
let x, y;

function preload() {
  img = loadImage("data/planegreen_1.png")
  bg  = loadImage("data/desert.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(fps);
  x = 75
  y = 240
}

function draw() {
  background(231, 229, 226);  // Wüstenhimmel
  image(bg, 0, 0);
  if (keyIsPressed) {
    if (keyCode == UP_ARROW) {
      if (y > 0) {
        y -= speed;
      }
    }
    else if (keyCode == DOWN_ARROW) {
      if (y < height - 30)
      {
        y += speed;
      }
    }
  }
  image(img, x, y)
}
