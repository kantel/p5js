let s = 550;     // size
let f = 0.45;    // scaling factor
let n = 10;       // no of chars
let WIDTH = 840
let HEIGHT = 460;

let z = ["👻", "🎃", "🤡", "🎉", "🧸", "🍾"];
let t = 0;
let t2 = 0;

function setup() {
  myCanvas = createCanvas(WIDTH, HEIGHT);
  myCanvas.parent("sketch")
}

function draw() {
  background(42, 40, 45);
  for (let i = 0; i < 2*n; i++) {
    for (let j = 0; j < n; j++) {
      drawChar(z[i%6],
               WIDTH/2 + 20 + s/(3**(i - t2))*cos(TAU*j/n + t),
               HEIGHT/2 + s/(3**(i - t2))*sin(TAU*j/n + t),
               s/(3**(i - t2)));
    }
  }
  t += 1/90;
  t2 += 1/90;
  if (t2 > 6) {
    t2 = 0;
  }
}

function drawChar(ch, x, y, si) {
  textSize(si*f);
  text(ch, x - 69*si*f/100, y + 7*si*f/20);
}