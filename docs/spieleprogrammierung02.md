## Spieleprogrammierung mit P5.js (2)

Im zweiten Teil meiner kleinen Tutorial-Reihe Spieleprogrammierung mit P5.js möchte ich das Spiel aus dem [ersten Teil des Tutoriums][3] von letzter Woche etwas robuster gestalten. Es ist Euch sicher aufgefallen, daß

   1. der Weg, den die Spielerfigur bei jedem Tastendruck zurücklegt, unkontrollierbar war und
   2. die Pfeiltasten auch gleichzeitig den Browser noch zum Scrollen animierten, so daß der Canvas recht unschön hin und her und auf und ab ruckelte.
   
Das hatte dann auch noch zur Folge, daß das Spiel im Firefox gar nicht lief, weil dieser die Pfeiltasten gar nicht erst an das JavaScript weiterreichte. Beides habe ich behoben, wie Ihr hier sehen könnt:

<div id="rogue02"></div>

Das erste ist recht einfach: Statt `keyIsPressed` in der `draw()`-Schleife aufzurufen, wo dann je nach Framerate und wie schnell man die Taste wieder loslassen kann, viele Events an das Skript abgefeuert werden, kann man diese Events besser in eine Funktion außerhalb der Drawschleife abfragen. P5.js stellt hierfür unter anderem die Funktionen `keyPressed()` (mit der man auch Spezialtasten wie eben die Pfeiltasten abfragen kann) und daß eher den Browser nicht tangierende (und daher empfohlene) `keyTyped()`, alternativ auch `keyReleased()`, zur Verfügung.

Die letzten beiden Funktionen nehmen aber nur ASCII-Werte entgegen, man kann mit ihnen die Pfeiltasten beispielsweise nicht abfragen, aber da diese sowieso unerwünschte Seiteneffekte zeigten, erinnerte ich mich an alte Atari-Tage, wo manchmal zwei Spieler an einer Tastatur gegeneinander spielten (das Internet war damals™ noch nicht erfunden). Der eine Spieler steuerte seine Figur zum Beispiel mit den Tasten `j`, `k`, `l` und `m`, der zweite Spieler nutzte die Tasten `a`, `s`, `d` und `x` (jeweils in der Bedeutung `links`, `hoch`, `rechts` und `runter`). Nach einer gewissen Eingewöhnung ist man damit genau so schnell wie mit den Pfeiltasten. Also habe ich dies auch in das kleine Skript eingebaut und der neue Quellcode sieht komplett so aus:

~~~javascript

var rogue0, rogue1;
var posx, posy;

function preload() {
    rogue0 = loadImage("../images/rogue0.png");
    rogue1 = loadImage("../images/rogue1.png");
    frameRate(30);
}

function setup() {
    var myCanvas = createCanvas(320, 240);
    myCanvas.parent("rogue02");
    posx = 160
    posy = 112
}

function draw() {
    background("green");
    if ((frameCount % 30) < 15) {
        image(rogue0, posx, posy);
    }
    else {
        image(rogue1, posx, posy);
    }
}

function keyTyped() {
    if ((key == "j") && (posx > 0)) {
        posx = posx - 16;  // nach links
    } else if ((key == "l") && (posx < width-16)) {
        posx = posx + 16;  // nach rechts
    } else if ((key == "k") && (posy > 0)) {
        posy = posy - 16;  // nach oben
    } else if ((key == "m") && (posy < height-16)) {
        posy = posy + 16; // nach unten
    }
}

~~~

Wie Ihr leicht feststellen könnt, ruckelt nun nichts mehr und die Figur läßt sich nun mit den Tasten `j`, `k`, `l` und `m` kontrollierter steuern.

<script src="../js/rogue02.js" type="text/javascript" ></script>

[3]: spieleprogrammierung01.md