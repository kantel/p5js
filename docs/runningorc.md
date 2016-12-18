# Running Orc mit P5.js

Das Thema der rennenden Orcs läßt mich nicht mehr los. Nachdem ich sie ja schon [einmal mit Processing][1] und [einmal mit Shoes][2] über den Bildschirm wuseln ließ, wollte ich dieses Mal mein [Versprechen][3] wahr machen, sie auch mit P5.js über den Bildschirm rennen zu lassen. Denn mit dieser -- Processing nachempfundenen -- JavaScript-Bibliothek könnt Ihr sie dann sogar *live* in meinem <del>Blog</del> Kritzelheft wuseln sehen:

<div id="runningorc20160306"></div>

Das ist doch schon mal was, oder? Je nach Internet-Verbindung und -Geschwindigkeit dauert es eine kleine Zeit, bis die Wiese mit den rennenden Orcs sichtbar wird, aber es funktioniert.

Im Prinzip bin ich so vorgegangen, wie ich es [hier][3] schon einmal beschrieben hatte. Allerdings gab es einige Besonderheiten, die ich beachten mußte. JavaScript resp. P5.js erwarten die Bilder im lokalen Verzeichnis `images` (so hatte ich es schließlich programmiert). Um sie daher automatisch dorthin zu kopieren, habe ich die die [RubyFrontier][7]-Makros

	<% imageref("field") %>
	<% imageref("orc1") %>
	<% imageref("orc2") %>
	
und so weiter in den Kopf dieses Dokumentes kopiert. Dadurch werden die Bilder alle einmal angefaßt, das fehlende Gleichheitszeichen des `ERB`-Makros (`<% macro() %>` statt `<%= macro() %>`) verhindert, daß die Bilder in die Seite eingebettet werden, doch RubyFrontier kopiert sie dennoch beim Herausrendern automatisch in das Zielverzeichnis, wo mein kleines Script `runningorc20160306.js` sie dann auch findet.

Das ist der Quelltext des Sketches:

~~~javascript

var bg;
var orc = [];

var frame = 0;
var y = -48;
var x = Math.random() * 620;
// var x = random(0, 620);

function preload() {
    bg = loadImage("../images/field.png");
    orc[0] = loadImage("../images/orc1.png")
    orc[1] = loadImage("../images/orc2.png")
    orc[2] = loadImage("../images/orc3.png")
    orc[3] = loadImage("../images/orc2.png")
}

function setup() {
    var myCanvas = createCanvas(640, 320);
    myCanvas.parent("runningorc20160306");
    frameRate(30)
}

function draw() {
    background(bg);
    frame = frameCount % 4
    y = y + 5;
    if (y >= 320) {
        y = -48;
        x = Math.random() * 620;
        // x = random(0, 620);
    }
    image(orc[frame], x, y);
}

~~~

JavaScript ist eine asynchrone Sprache, das heißt, wenn zum Beispiel Bilder geladen werden, fährt das Skript erst einmal fort, ohne sich darum zu kümmern, ob die Bilder schon fertig geladen wurden oder nicht. Das kann zu Fehlern führen, daher gibt es bei p5.js eine `preload()`-Funktion, die dafür sorgt, daß die folgenden Funktionen `setup()` und `draw()` erst aufgerufen werden, wenn alle Bilder geladen sind. Alternativ könnte man dies natürlich auch mit einem `callback` erreichen, aber so finde ich es durchsichtiger und eleganter.

## Was habe ich dabei gelernt?

P5.js ist zwar Processing-ähnlich, aber es ist dennoch in vielen Fällen ein wenig anders als Processing. Es ist tatsächlich JavaScript und damit eine eigene Programmiersprache mit ihren eigenen Tücken und Stärken.

Aber das Schönste an p5.js ist, daß man seine Sketche nun im Browser präsentieren und die Dokumentation dazu gleichzeitig in [Markdown][8] resp. [kramdown][9] verfassen kann. Das ist zwar noch kein `literate programming`, kommt dem aber schon ziemlich nahe. Ich werde weiter mit P5.js herumspielen und Euch an meinen Erfahrungen teilhaben lassen.

## Caveat

Ja, und dann ist da noch die unschöne Sache mit dem `x = random(0, 620)` (im Script auskommentiert). Es ist eine p5.js-eigene Funktion und laut Manual sollte sie funktionieren, doch schon der p5.js-Editor bringt eine Fehlermeldung

	7: Uncaught ReferenceError: random is not defined

und die Fehlerkonsole vom Chrome sagt ebenfalls

	ReferenceError: Can't find variable: random

und daher bin ich auf das JavaScript-eigene `Math.random()` ausgewichen. Ich weiß nicht, ob das unbedingt nötig gewesen wäre, dann das Script lief dennoch, aber mir war die Fehlermeldung unheimlich.

Und JavaScript und das Amazon-Widget, das die meisten meiner Seitenenden ziert, scheinen sich zu beissen. [Wie hier schon angemerkt][10], kommt das Amazon-eigene JavaScript mit irgendeiner fehlerhaften Color-Funktion, die entweder mein eigenes Script an der Ausführung hindert oder Amazons Script ziert sich störrisch und will nicht starten. Ich habe daher für meine JavaScript-Experimente erst einmal ein eigenes Template definiert, das auf Amazons Widget verzichtet. Dann sollten auch [Flotr2][11] und andere JavaScript-Bibliotheken direkt im *Schockwellenreiter* laufen und ich kann hoffentlich künftig auf Screenshots verzichten.

<script src="../js/runningorc20160306.js" type="text/javascript" ></script>

[1]: http://blog.schockwellenreiter.de/2016/01/2016010704.html
[2]: http://blog.schockwellenreiter.de/2016/01/2016011304.html
[3]: http://blog.schockwellenreiter.de/2015/11/2015113001.html
[7]: http://cognitiones.kantel-chaos-team.de/webworking/staticsites/rubyfrontier.html
[8]: http://cognitiones.kantel-chaos-team.de/webworking/auszeichnungssprachen/markdown.html
[9]: http://cognitiones.kantel-chaos-team.de/webworking/auszeichnungssprachen/kramdown.html
[10]: http://blog.schockwellenreiter.de/2015/12/2015120205.html
[11]: http://cognitiones.kantel-chaos-team.de/multimedia/computergraphik/flotr2.html
