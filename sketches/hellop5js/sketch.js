let x;
let x1;
let y;
let dia = 30;

function setup() {
  createCanvas(520, 280);
  x = -dia;
  x1 = 0;
  y = height/2;
}

function draw() {
  background(25, 25, 112);
  fill(255, 212, 121);
  ellipse(x, y, dia);
  x += 1;
  x1 += .005;
  y = map(sin(x1), -1, 1, dia/2, height - dia/2);
  
  if (x >= width + dia) {
    x = -dia;
  }
}