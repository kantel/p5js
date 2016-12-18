# Anhang 3: Zwei Canvases auf einer HTML-Seite mit P5.js

Da fragte mich [ein Freund][1], der meine Begeisterung für [Processing.py][3] und P5.js kennt, wie man denn mit P5.js zwei unabhängige *Canvases* auf einer HTML-Seite realisieren kann. Ich dachte, daß dies eigentlich ziemlich einfach sein müßte, doch mein erster Ansatz schlug fehl -- was vor allem daran lag, daß die Form der Objektbehandlung in JavaScript einem doch ziemlich fremd vorkommt, wenn man eher mit Python oder Ruby vertraut ist. Also habe ich ein wenig gegoogelt und [diese Lösung][7] gefunden, die mir sagte, daß ich gar nicht mal so falsch lag, nur die Kapselung der Objekte hatte ich anders und damit falsch implementiert. Aber hier erst einmal der erste Canvas,

<div id="mc1"></div>

der einfach ein rotes Quadrat auf schwarzem Grund von rechts nach links bewegt. Der zweite Canvas hingegen

<div id="mc2"></div>

zeigt einen blauen Kreis vor einem grauen Hintergrund, der sich von links nach rechts über den Canvas schiebt. Realisiert habe ich das dann mit diesem kleinen P5.js-Skript:

~~~javascript
// Canvas One
var s = function( p ) { // p could be any variable name
  var x = 100; 
  var y = 100;
  var speed = 2.0;
  p.setup = function() {
    p.createCanvas(400, 200);
  };

  p.draw = function() {
    p.background(0);
    p.fill(255, 0, 0);
	x -= speed;
	if (x <= 0) {
		x = p.width;
	}
    p.rect(x,y,50,50);
  };
};
var myp5 = new p5(s, 'mc1');

// Canvas Two
var t = function( p ) { 
  var x = 100.0; 
  var y = 100; 
  var speed = 2.5; 
  p.setup = function() {
    p.createCanvas(400, 200);
  };

  p.draw = function() {
    p.background(100);
    p.fill(0, 0, 255);
    x += speed; 
    if(x > p.width){
      x = 0; 
    }
    p.ellipse(x,y,50,50);

  };
};
var myp5 = new p5(t, 'mc2');
~~~

Jeder Canvas ist als ein eigenes Objekt (`s` und `t`) realisiert. Wichtig ist einfach nur die Zeile unter den jeweiligen Objekt-Deklarationen, die den Objekten je einen eignen Canvas-Identifier (`mc1` und `mc2`) zuteilt. damit die vom Skript auch gefunden werden, müssen auf der Website an beliebiger Position zweimal je ein `div` angelegt werden, das die entsprechenden `id`s enthält, also

~~~html
<div id="mc1"></div>
<div id="mc2"></div>
~~~

Genau so habe ich das auch auf dieser Seite eingebunden und wie man P5.js mit RubyFrontier verbandelt, habe ich in einer Worknote [hier erklärt][9].

## Reihenfolge beachten

Bei dieser Art der Erzeugung zweier P5-Instanzen ist es wichtig, daß `p5.js` oder `p5.min.js` *vor* dem eigentlichen Skript geladen werden, weil sonst, da JavaScript asynchron ausgeführt, das Objekt `p5` nicht gefunden wird. 

## Caveat

Ich bin mir allerdings nicht sicher, wie sinnvoll es ist, mehr als einen Canvas auf einer Seite zu implementieren. Die beiden doch recht simplen Beispielskripte laden schon recht lange, wenn man komplexere und längere Skripte nutzt, wird dies das Laden der Webseite vermutlich doch arg verzögern.

<script src="../js/p5.min.js" type="text/javascript" ></script>
<script src="../js/canvas1215.js" type="text/javascript" ></script>


[1]: http://www.peacesoftware.de/
[3]: http://py.kantel-chaos-team.de/
[7]: http://www.joemckaystudio.com/multisketches/
[9]: p5rubyfrontier.md