const windowWidth = 720;
const windowHeight = 460;
const bgWidth = 1920;
const fps = 60;
const maxAnim = 4;      // Animation cycle
const noPizzas = 7;
let planImages = []
let plane;
let missileImg;
let missiles = [];
let explosionImg;
let hits = [];
let pizzas = [];
let pizzaImg;
let bgImage;
let back1, back2;

function preload() {
  planImages[0] = loadImage("data/planegreen_1.png");
  planImages[1] = loadImage("data/planegreen_2.png");
  missileImg = loadImage("data/missile.png");
  explosionImg = loadImage("data/explosion.png")
  pizzaImg = loadImage("data/pizza.png");
  bgImage = loadImage("data/desertbackground_s.png");
  displayFont = loadFont("data/RubikGemstones-Regular.ttf")
  }

function setup() {
  myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent("sketch");
  frameRate(fps);
  textFont(displayFont);
  back1 = new Background(0, 0, bgImage);
  back2 = new Background(bgWidth, 0, bgImage);
  for (let i = 0; i < noPizzas; i++) {
    let x = width + random(30, 100);
    let y = random(10, height - 100);
    pizzas[i] = new Enemy(x, y, pizzaImg);
  }
  plane = new Plane();
}

function draw() {
  back1.update();
  back2.update();
  back1.display();
  back2.display();
  for (let pizza of pizzas) {
    pizza.update();
    pizza.display();
  }
  for (let missile of missiles) {
    missile.update();
    missile.display();
  }
  for (let hit of hits) {
      hit.update();
      hit.display();
  }
  plane.update();
  plane.display();
  displayHUD();
}

function displayHUD() {
  let hud1 = ("Score: " + plane.score);
  let hud2 = ("Lives: " + plane.lives);
  push();
  stroke(0);
  strokeWeight(1);
  fill(200, 10, 10);
  textSize(36);
  text(hud1, 20, 40);
  text(hud2, 250, 40);
  pop();
}