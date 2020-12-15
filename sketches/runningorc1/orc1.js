let bg;
let orcImg = [];
let orcs = []

let frame = 0;

function preload() {
  bg = loadImage("images/field.png");
  orcImg[0] = loadImage("images/orc1.png");
  orcImg[1] = loadImage("images/orc2.png");
  orcImg[2] = loadImage("images/orc3.png");
  orcImg[3] = loadImage("images/orc2.png");
}

function setup() {
  myCanvas = createCanvas(320, 240);
  myCanvas.parent("orc1")
  resetOrc()
  frameRate(30);
}

function draw() {
  background(bg);
  frame = frameCount % 4;
  y = y + 5;
  if (y >= 320) {
    resetOrc();
   }
  image(orcImg[frame], x, y)
}

function resetOrc() {
  y = -48;
  x = random()*300
}
