// const { endRecordSvg } = require("./js/p5.plotSvg");

const WIDTH = 640;
const HEIGHT = 400;
const NC = 100;      // Number of Circles
let running = true;

function setup() {
    createCanvas(WIDTH, HEIGHT);         
    // canvas = createCanvas(640, 400);  // für das Einbinden
    // canvas.parent("myCanvas");        // in diese Webseite
    saveSVG("randcircle.svg")
}

function draw() {
    if (running) {
        randomCircles();
    }
}
    
function randomCircles() {
    background("#62c777");

    strokeWeight(1);
    for (let i = 0; i < NC; i++) {
        let x = random(50, width - 50);
        let y = random(50, height - 50); 
        stroke(0);
        let fillcol = random(["#334775", "#6484AC", "#F09108",
                              "#F2CF90", "#EA4E4A", "#E8434C",
                              "#906120"]);                            
        fill(fillcol);
        circle(x, y, 15)
        let transcol = random(["#33477564", "#6484AC64", 
                               "#EA4E4A64", "#F0910864",
                               "#F2CF9064", "#E8434C64",
                               "#90612064"]);
        noStroke();
        fill(transcol);
        radius = random(14, 40);
        circle(x, y, 2*radius)
    }
    // Aufnahme beenden und speichern
    console.log("After Save");
    running = false;
}


function mousePressed() {
    running = true;
}