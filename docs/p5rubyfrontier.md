# Anhange 1: P5.js und RubyFrontier


P5.js mit RubyFrontier zu verheiraten, ging einfacher, als ich ursprünglich dachte. Ich hatte bisher mein <del>Blog</del> Kritzelheft möglichst [JavaScript](cp^JavaScript)-frei gehalten und war mir daher der JavaScript-Unterstützung von RubyFrontier nicht sicher. Aber es ist wirklich einfach: RubyFrontier kennt eine `#linkjavascripts`-Direktive, die ein Array der einzubindenden JavaScript-Dateien (ohne die Endung `.js`) erwartet. Diese Dateien müssen in einem `#javascripts`-Ordner liegen. Es sind allerdings -- wie bei `#images` -- mehrere `#javascripts`-Ordner möglich, RubyFrontier nimmt dann das, was es im der Datei am nächsten liegenden Ordner findet, dann im darüberliegenden und so weiter bis zum Wurzelverzeichnis der Website. Und so habe ich einen `#javascripts`-Ordner direkt unterhalb des Wurzelverzeichnisses angelegt und dort die Datei `p5.min.js` hineingepackt und ein Verzeichnis `#javascripts` im gleichen Verzeichnis wie diese Textdatei erzeugt mit dem eigentlichen Script. Ich habe das Script `animation1130.js` genannt. Da RubyFrontier sehr mäkelig bei doppelten Dateinamen ist, habe ich das Erstelldatum im Dateinamen versteckt. Das schützt relativ sicher vor doppelten Dateinnamen.

Da ich die JavaScript-Dateien nicht für jede Seite des *Schockwellenreiters* laden will, habe ich die Direktive

	#linkjavascripts ["p5.min", "animation1130"]

in den Kopf dieser Datei gepackt, so daß sie auch nur für diese Datei gilt. RubyFrontier scheint die Reihenfolge des Arrays zu achten, so daß `p5.min.js` **vor** `animation1130.js` in den Header der Datei eingebunden wird

Das Ergebnis ist (wie man mit einem Blick in den Seitenquelltext der fertig herausgerenderten Seite leicht feststellen kann)

	<script src="../../javascripts/p5.min.js" type="text/javascript" ></script>
	<script src="javascripts/animation1130.js" type="text/javascript" ></script>

und das ist eigentlich genau das, was ich möchte. Nun noch schnell die Datei `animation1130.js` mit Inhalt gefüllt

	function setup() {
		var myCanvas = createCanvas(560, 315);
		myCanvas.parent("animation1130")
		fill("#ff0000");
		noStroke();
	}

	function draw() {
		background(204);
		ellipse(mouseX + 20, mouseY - 20, 30, 30);
	}

und an die Stelle, wo das Ergebnis gezeigt werden soll (unterhalb dieser Zeilen) ein

	<div id="animation1130"></div>

eingefügt und schon seht Ihr (nach einer gewissen Ladezeit), wie innerhalb des Canvas ein roter Punkt dem Mauszeiger folgt:

<div id="animation1130"></div>

Das ist noch nichts Weltbewegendes, aber immerhin schon mal ein Anfang, der auf die Fähigkeiten von p5.js neugierig machen soll.

Nun kann ich wie gewohnt eine Webseite in [TextMate][1] mit Markdown -- respektive im Falle des *Schockwellenreiters* mit dem Markdown-Superset [kramdown][2] -- schreiben, sie mit RubyFrontier herausrendern und in diese Seite gleich interaktive p5.js-Skripte einbauen.

Als nächstes schwebt mir ein p5.js-Tutorial vor. Ich lerne JavaScript und lasse Euch gleich an meinen Fortschritten teilhaben. Ich freue mich schon darauf.

<script src="../js/animation1130.js" type="text/javascript" ></script>

[1]: http://cognitiones.kantel-chaos-team.de/produktivitaet/textmate.html
[2]: http://cognitiones.kantel-chaos-team.de/webworking/auszeichnungssprachen/kramdown.html
