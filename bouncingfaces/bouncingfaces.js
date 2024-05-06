function preload() {
  face01 = loadImage("data/face01.png");
  face02 = loadImage("data/face02.png");
  face03 = loadImage("data/face03.png");
}

let faces = [];
const numFaces = 30;

function setup() {
  createCanvas(800, 480);
  imageMode(CENTER);
  background("#2b3e50");
  for (let i = 0; i < numFaces; i++) {
    faces.push(new Face());
  }
  print(faces.length);
}

function draw() {
  background("#2b3e50");
  for (let face of faces) {
    face.checkEdges();
    face.move();
    face.show();
  }
}
