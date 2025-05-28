const windowWidth = 300;
const windowHeight = 200;
const noSheeps = 40;
const fps = 5;

let sheeps = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < noSheeps; i++) {
    sheeps[i] = new Sheep(random(20, width - 20), random(20, height - 20));
  }
  frameRate(fps)
}

function draw() {
  background(0, 100, 0);
  for (let sheep of sheeps){
    sheep.update();
    sheep.display();
  }
}
