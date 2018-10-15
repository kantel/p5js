function setup() {
  myCanvas = createCanvas(480, 120);
  myCanvas.parent("myCanvas")
  textFont("Verdana");
}

function draw() {
    background(200);
    textSize(32);
    text("Hallo Jörg!", 25, 60);
    textSize(16);
    text("Hier gibt es die schöne, neue Emoji-Welt: 🐸", 27, 90);
  
}