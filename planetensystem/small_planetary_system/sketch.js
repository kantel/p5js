const sunDiam = 80;
const earthDiam = 30;
const earthOrbitRadius = 130;
const moonDiam = 10;
const moonOrbitRadius = 50;
const nemDiam = 12;
const nemOrbitRadius = 38;

let earthAngle = 0;
let moonAngle = 0;
let nemAngle = 0;

function setup() {
  createCanvas(600, 400);
  rectMode(CENTER);
}

function draw() {
  background(0, 0, 0);
  
  // Sonne im Zentrum
  translate(width/2, height/2);
  fill(255, 200, 64);
  circle(0, 0, sunDiam);
  
  // Erde dreht sich um die Sonne
  rotate(earthAngle);
  translate(earthOrbitRadius, 0);
  fill(64, 64, 255);
  // circle(0, 0, earthDiam);
  rect(0, 0, earthDiam, earthDiam);
  
  // Mond dreht sich um die Erde
  push();
  rotate(moonAngle);
  translate(moonOrbitRadius, 0);
  fill(192, 192, 80);
  // circle(0, 0, moonDiam);
  rect(0, 0, moonDiam, moonDiam);
  pop();
  
  // Nemesis dreht sich um die Erde
  push();
  rotate(nemAngle);
  translate(nemOrbitRadius, 0);
  fill(220, 75, 75);
  rect(0, 0, nemDiam, 1.5*nemDiam);
  pop();
  
  earthAngle += 0.01;
  moonAngle += 0.01;
  nemAngle += 0.015;
}