let numBirds = 25;
let birds = [];
let birdsIm = [];

async function setup() {

    // load the bird images
    let chick = await loadImage("assets/chick.png");
    let chicken = await loadImage("assets/chicken.png");
    let duck = await loadImage("assets/duck.png");
    let owl = await loadImage("assets/owl.png");
    let parrot = await loadImage("assets/parrot.png");
    let penguin = await loadImage("assets/penguin.png");
    birdsIm = [chick, chicken, duck, owl, parrot, penguin]
    // console.log("Alle Bilder geladen.");

    createCanvas(640, 400);
    // canvas = createCanvas(640, 400);   // für das Einbinden
    // canvas.parent("myCanvas");         // in diese Webseite
    imageMode(CENTER);
    reset();
}

function draw() {
    background(57, 92, 152);
    for (let i = 0; i < numBirds; i++) {
        for (let j = i + 1; j < numBirds; j++) {
            birds[i].collisionDetection(birds[j]); 
        }
        birds[i].checkBoundaries();
        birds[i].update();
        birds[i].display();
    }
}

function reset() {
  for (let bird = 0; bird < numBirds; bird++) {
    b = new Bird();
    birds.push(b);
  }
}

function mousePressed() {
  birds.length = 0;   // Array leeren
  reset();
}