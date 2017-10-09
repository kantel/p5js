# Tutorial: »Echte« Klassen in JavaScript

Gestern abend hatte ich mir zwei Videos von *Daniel Shiffman* angeschaut (nämlich [dieses](https://www.youtube.com/watch?v=T-HGdc8L-7w) und [dieses](https://www.youtube.com/watch?v=rHiSsgFRgx4)), die mich regelrecht vom Hocker gehauen haben. Nicht nur, daß JavaScript in der Version ECMAScript 6 (ES 6) [Konstanten](http://es6-features.org/#Constants) und [lokalen Variablen-Scope](http://es6-features.org/#BlockScopedVariables) besitzt -- darauf hatte *Shiffman* schon in einem früheren Video hingewiesen --, nein, ES 6 besitzt jetzt [echte Klassen](http://es6-features.org/#ClassDefinition), wie man sie zum Beispiel auch aus Python kennt. Kein Rumhampeln mehr mit Funktionen und Prototypen, sondern stattdessen gibt es nun Konstruktoren und Methoden -- und natürlich können den Konstruktoren auch Parameter übergeben werden. Das mußte ich (in P5.js, doch gleich einmal ausprobieren:

<div id="bouncingball"></div>

Ich wollte das klassische *Bouncing Ball*, also auf den Canvas herumhüpfende Bälle, mit Klassen programmieren, daher habe ich erst einmal die Klasse `Ball` in JavaScript mit den neuen Methoden implementiert:

~~~javascript
class Ball {

    constructor(x, y, r, c) {
        this.pos = createVector(x, y);
        this.r = r/2;
        this.c = c
        this.vel = createVector(1, 1).mult(random(2, 6));
        this.dir = createVector(1, 1);
    }

    update() {
        this.pos.x += this.vel.x * this.dir.x;
        this.pos.y += this.vel.y * this.dir.y;
    }

    display() {
        noStroke();
        fill(this.c)
        ellipse(this.pos.x, this.pos.y, this.r);
    }

    checkEdges() {
        if (this.pos.x > width - this.r && this.dir.x > 0) {
            this.dir.x *= -1;
        }
        if (this.pos.x < this.r && this.dir.x < 0){
            this.dir.x *= -1;
        }
        if (this.pos.y > height - this.r && this.dir.y > 0) {
            this.dir.y *= -1;
        }
        if (this.pos.y < this.r && this.dir.y < 0) {
            this.dir.y *= -1;
        }
    }
}
~~~

Das ist JavaScript, wie ich es bisher zumindest noch nicht kannte. Es gibt einen Konstruktor, der tatsächlich auch so heißt (`constructor()`) und die Methoden der Klasse werden ohne `function()` definiert. Zwei Methoden sind für die Darstellung zuständig -- ich habe sie aus ([Processing.py](cp^processing.py)-) Gewohnheit `update()` und `display()` genannt und eine dritte Methode (`checkEdges()`) sorgt dafür, daß der Ball den Canvas nicht verläßt.

Damit kann man schon ein einfaches Programm schreiben, das ein Bällchen über die Leinwand hüpfen läßt:

~~~javascript
let ball;

function setup() {
    let myCanvas = createCanvas(560, 320);
    myCanvas.parent("bouncingball");
    ball = new Ball(random(0, width), random(0, height), random(20, 50), color(100, 255, 150));
}

function draw() {
    background(0);
    ball.checkEdges();
    ball.update();
    ball.display();
}
~~~

So richtig interessant wird das mit der Objektorientierung aber erst, wenn man viele Instanzen einer Klasse erzeugt, also viele, viele bunte Bällchen über den Canvas hüpfen läßt. Dazu muß das Hauptprogramm nur geringfügig geändert werden:

~~~javascript
let ball = [];

function setup() {
    let myCanvas = createCanvas(560, 320);
    myCanvas.parent("bouncingball");
    colorMode(HSB, 255)
    for (var i = 0; i < 20; i++) {
        c = color(random(255), 255, 255);
        ball.push(new Ball(random(0, width), random(0, height), random(20, 50), c));
    }
}

function draw() {
    background(0);
    for (var i = 0; i < ball.length; i++) {
        ball[i].checkEdges();
        ball[i].update();
        ball[i].display();
    }
}
~~~

Ich habe einfach eine Liste von Bällen angelegt, die unterschiedliche Startpositionen, verschiedene Durchmesser und zufällig ausgewählte Farben besitzen. Das Ergebnis könnt Ihr oben bewundern.

## Was nun?

[Hier habe ich gesehen](http://es6-features.org/#ClassInheritance), das ES 6 auch Vererbung unterstützt. Und *Daniel Shiffman* hat weitere Tutorial-Videos versprochen, die sich mit JavaScript und objektorientierter Programmierung befassen. Ich werde das weiter beobachten und berichten. Denn mit diesen neuen Features wird JavaScript im allgemeinen und P5.js im Besonderen wirklich interessant -- unter anderem auch für die Spieleprogrammierung. *Still digging!*

## Caveat

Ich habe keinen blassen Schimmer, welche Browser ab welcher Version ECMAScript 6 unterstützen. Bei mir werkelt ein *Chrome Version 62.0.3202.45* für MacOS X (64 Bit). Wenn Ihr also keine hüpfenden Bällchen seht, dann solltet Ihr auf einen anderen, moderneren Browwser wechseln. Oder JavaScript erlauben. Denn ein JavaScript Tutorial bei abgeschaltetem JavaScript macht wenig Sinn.

Es kann aber auch schlicht und einfach sein, daß der Browser das gesamte JavaScript noch laden muß. JavaScript ist asynchron und schon während des Ladevorgangs wird der Rest der Seite angezeigt. Gerade bei langsamer Internetverbindung (hörst Du, Kabel Deutschland?) müßt Ihr Euch eventuell in Geduld üben.

<script src="../js/bouncingball.js" type="text/javascript" ></script>