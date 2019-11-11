let enemy;
let player;

function setup() {
	let myCanvas = createCanvas(640, 320);
	myCanvas.parent("myCanvas");
  enemy = new Enemy(width/2, height/2);
  player = new Player(20, 20);
}

function draw() {
	background("#95e0f5");
  if (circleCollision(enemy, player)) {
    background("#817ac6");
  } else {
    background("#95e0f5");
  }
  enemy.show();
  player.update();
  player.show();
}

function circleCollision(c1, c2) {
  distance = dist(c1.x, c1.y, c2.x, c2.y);
  if (distance < c1.r + c2.r) {
    return true;
  } else {
    return false;
  }
}

class Enemy {
  
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 64;
  }
  
  show() {
    strokeWeight(1);
    fill("#c666e6");
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }
}

class Player {
  
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 32;
  }
  
  update() {
    this.x = mouseX;
    this.y = mouseY;
  }
  
  show() {
    strokeWeight(1);
    fill("#9757a5");
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }
}