let i = 0;
let x = y = 0;

function setup() {
  createCanvas(600, 400);
  background(234, 218, 184);
  colorMode(HSB, 360, 100, 100);
  frameRate(120);
}

function draw() {
  let p = floor(random(0, 3));
  if (p == 0) {
    x /= 2;
    y = (y + height)/2;
  } else if (p == 1) {
    x = (x + width/2)/2;
    y /= 2;
  } else if (p == 2) {
    x = (x + width)/2;
    y = (y + height)/2
  }
  stroke(i%360, 100, 100);
  strokeWeight(2);
  point(x, y);
  i += 1;
  if (i > 24000) {
    print("I did it, Babe!");
    noLoop();
  }
}