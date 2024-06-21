let bg;
const imwidth = 1600;
const imheight = 667

function preload() {
  bg = loadImage("data/bg.jpg")
}

function setup() {
  createCanvas(640, 480);
  t = createTurtle();
  frameRate(0.5);
}

function draw() {
  clear();
  image(bg, -370, 0, imwidth-370, height);
  // background("#ffffff");

  t.setposition(width / 2, height - 75);
  plant(150);
}

function plant(size) {
  if (size < 1) return;

  t.pensize(map(size, 120, 1, 10, 0.5));
  t.pencolor(size > 10 ? "brown" : "green");

  t.forward(size*0.9);

  var [x, y] = t.position();
  var h = t.heading();

  var nextSign = 1;

  repeat(random([2, 3]), () => {
    var angle = nextSign * random(10, 45);
    nextSign *= -1;

    t.right(angle);
    plant(size * random(0.5, 0.7));

    t.setposition(x, y);
    t.setheading(h);
  });
}

function repeat(n, fn) {
  for (var i = 0; i < n; i++) {
    fn(i);
  }
}
