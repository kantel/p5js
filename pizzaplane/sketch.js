const windowWidth = 720;
const windowHeight = 520;
const bgWidth = 2056;
const fps = 60;
const maxAnim = 4;      // Animation cycle
const noPizzas = 10;
let planImages = []
let plane;
let pizzas = [];
let pizzaImg;
let bg1, bg2;
let back1, back2;

function preload() {
  planImages[0] = loadImage("data/planegreen_1.png")
  planImages[1] = loadImage("data/planegreen_2.png")
  pizzaImg = loadImage("data/pizza.png")
  bg1  = loadImage("data/background02a_2.png")
  bg2  = loadImage("data/background02b_2.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(fps);
  back1 = new Background(0, 0, bg1);
  back2 = new Background(bgWidth, 0, bg2);
  for (let i = 0; i < noPizzas; i++) {
    let x = width + random(30, 100);
    let y = random(10, height - 100);
    pizzas[i] = new Enemy(x, y, pizzaImg);
  }
  plane = new Plane();
}

function draw() {
  image(bg1, 0, 0);
  back1.update();
  back2.update();
  back1.display();
  back2.display();
  for (pizza of pizzas) {
    pizza.update();
    pizza.display();
  }
  plane.update();
  plane.display();
}
