# Spaß mit Emojis und P5.js

Irgendwo im Norden Schottlands existiert eine [geheimnisvolle Klosterruine][1]. Man sagt, daß dort bei Mondlicht der Geist des letzten Mönches dieser Abtei herumspukt, der 1590 starb. Er könne jedoch die nähere Umgebung dieser Abtei nicht verlassen. Dieses Verhalten möchte ich nun mit P5.js -- der (eigenständigen) JavaScript-Version von Processing -- nachbauen.

<div id="ghost01"></div>

Als Sprite für den Geist des Mönches dient mir ein Emoji, und zwar dieses: 👻. Ich habe es direkt als String mit

	var ghost = "👻";

in das Skript eingebunden. Das erspart mir das Laden eines Bildes, jedoch ist für die Darstellung des Gespenstes der Browser oder die Fontverwaltung des darunterliegenden Betriebssystems verantwortlich. Ohne Emoji- und UTF-8-Unterstützung seht Ihr daher leider nichts.

Den Hintergrund bildet ein Bild von *Melrose Abbey* im Mondschein, das ich in den Tiefen des Netzes gefunden und auf die Maße 640 x 360 Pixel gestutzt habe. Es paßte so schön zu meiner kleinen Eingangsgeschichte. Da JavaScript asynchron ist und es daher passieren könnte, daß der Browser noch mit dem Laden des Bildes beschäftigt ist, wenn das Script es eigentlich schon anzeigen will, besitzt P5.js eine `preload()`-Funktion, die das Skript solange anhält, bis alle Ressourcen, die in dieser Funktion geladen werden, auch wirklich geladen sind.

~~~javascript
function preload() {
	melroseAbbey = loadImage("../images/melrose-abbey.jpg");
}
~~~

Das Gespenst folgt der Maus. Bei meiner [ersten Vorstellung von P5.js][5] hatte ich ja schon einmal einen kleinen roten Kreis dem Mauszeiger folgen lassen, das wirkte jedoch recht statisch und unnatürlich. Daher bin ich hier einer Idee aus dem Buch [Getting Started with P5.js][6] (Seite 65) gefolgt, und eine Technik eingesetzt, die *Easing* genannt wird. Mit

~~~javascript
var easing = 0.01;

[…]

	var targetX = mouseX;
	var targetY = mouseY;
	x += (targetX - x)*easing;
	y += (targetY - y)*easing;
~~~

folgt der Geist mit einer gewissen Verzögerung dem Mauszeiger. Die Variable `easing` sollte zwischen 0 und 1 liegen. Je kleiner der Wert ist, desto größer ist die Verzögerung. Umgekehrt gilt natürlich: Je größer der Wert von `easing` ist, desto schneller folgt das Gespenst dem Mauszeiger. Liegt der Wert gar bei 1, gibt es gar keine Verzögerung mehr. Ihr könnt ruhig mit dem Wer von `easig` herumspielen, um ein Gefühl für die Verzögerung zu bekommen.

Natürlich soll der Geist des Mönches die Abtei nicht verlassen können. Dafür habe ich einfach mit

~~~javascript
	if (x >= width - 40) {
		x = width - 40;
	}
	if (x <= 0) {
		x = 0;
	}
	if (y >= height - 4) {
		y = height - 4;
	}
	if (y <= 36) {
		y = 36;
	}
~~~

die Grenzen des Canvas abgefragt. Die Offset-Werte (0, -40) für `x` und (-4, 36) für `y` habe ich durch wildes Experimentieren herausgefunden. Und mit der Zeile

	text(ghost, x, y);

fügt Ihr dann den Emoji in den Canvas ein.

Und nun zur Abrundung das komplette Skript

~~~javascript
var ghost = "👻";
var melroseAbbey;
var x = 320;
var y = 400;
var easing = 0.01;

function preload() {
	melroseAbbey = loadImage("../images/melrose-abbey.jpg");
}

function setup() {
	var myCanvas = createCanvas(640, 360);
	myCanvas.parent("ghost01");
	textSize(40);
}

function draw() {
	background(melroseAbbey);
	var targetX = mouseX;
	var targetY = mouseY;
	x += (targetX - x)*easing;
	if (x >= width - 40) {
		x = width - 40;
	}
	if (x <= 0) {
		x = 0;
	}
	y += (targetY - y)*easing;
	if (y >= height - 4) {
		y = height - 4;
	}
	if (y <= 36) {
		y = 36;
	}
	text(ghost, x, y);
}
~~~

und hier auch das Bild von der Abtei im Mondlicht, damit Ihr das Beispiel nachprogrammieren könnt:

![Melrose Abbey](images/melrose-abbey.jpg)

## Caveat

Ich habe das Skript bisher nur auf meinem Mac ausprobieren können (MacBook Pro mit MacOS X 10.9.5) und den Browsern Safari, Chrome und <del>Firefox</del>[^1]. Ich weiß daher nicht, ob und wie es in anderen Betriebssystemen und Browsern funktioniert. Über die Zusendung von Screenshots unter Windows und Linux wäre ich daher dankbar.

Außerdem kann es -- je nach Internetverbindung -- eine gewisse Zeit dauern, bis das Bild und das Skript geladen sind. Wenn Ihr daher nicht sofort das Kloster mit dem Gespenst sehen solltet, faßt Euch ein wenig in Geduld.

Und natürlich gilt: P5.js **ist** JavaScript. Solltet Ihr aus Sicherheitsgründen JavaScript in Eurem Browser abgeschaltet haben (wofür ich durchaus Verständnis besitze), kann es nicht funktionieren.

Anders herum gilt auch: JavaScript besitzt einen gefährlichen, globalen Namespace für alle auf einer Seite eingebundenen Skripte. Bei mir ist war zum Beispiel das Skript eines Amazon-Widgets, das die Ausführung von P5.js-Skripten verhindert hatte. Daher ist dieses Widget in allen Seiten, auf denen ich mit JavaScript experimentiere, abgeschaltet. Hier hilft ein Blick in die JavaScript-Konsole Eures Browsers, um eventuelle Inkompatibilitäten herauszufinden.

[^1]: Firefox hat scheinbar ein Problem. Ich benutze ihn selten und mein erster Tests mit einer vermutlich sehr alten Version funktionierte. Nach dem automatischen Update sah ich aber das Emoji-Gespenst nicht mehr. Daher (wie [hier schon einmal festgestellt][7]): Firefox und P5.js scheinen nicht wirklich miteinander zu harmonieren.

<script src="../js/ghost01.js" type="text/javascript" ></script>


[1]: https://de.wikipedia.org/wiki/Melrose_Abbey
[5]: p5rubyfrontier.md
[6]: https://www.amazon.de/Getting-Started-p5-js-Interactive-JavaScript/dp/1457186772/ref=as_li_ss_tl?ie=UTF8&linkId=&ref_=as_sl_pc_ss_til&linkCode=ll1&tag=derschockwell-21&linkId=40db26a4205daab7539527e3799dd080
[7]: spieleprogrammierung02.md