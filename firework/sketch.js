const WIDTH = 840;
const HEIGHT = 400;
let startX;
let startY;
let bgColor;
let p;
let particles = [];


function setup() {
  myCanvas = createCanvas(WIDTH, HEIGHT);
  myCanvas.parent("sketch");
  startX = width/2;
  startY = 70;
  // bgColor = color(49, 197, 244);     // Coding Train: Hellblau
  bgColor = color(24, 46, 79);       // Lothar Götz: Dunkelblau

  // particles[0] = new Particle(startX, startY);
}

function draw() {
  background(bgColor);
  let change = random(10);
  if (change <= 5) {
    p = new Particle(startX, startY);
  } else {
    p = new RectParticle(startX, startY);
  }
  particles.push(p)
   for (let i = 0; i < particles.length; i++) {
    // print(particles[i].loc.x)
    particles[i].update();
    particles[i].display();
    if (particles[i].isNotAlive()) {
      particles.slice(i, 1);
      // print("is dead");
      // noLoop();
    }
  }
}
