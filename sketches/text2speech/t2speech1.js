let speech;

function setup() {
    createCanvas(400, 100);
    background(0);
    speech = new p5.Speech();
    speech.onLoad = ready;

    speech.onStart = startSpeaking;
    speech.onEnd = endSpeaking;

    function ready() {
        // console.log("Speech geladen!");
        // console.log(speech.voices);
    }

    function startSpeaking() {
        // console.log("Start speaking");
        background(255, 10, 10);
        textSize(40);
        fill(255)
        text("Es spricht P5!", 60, 65);
    }

    function endSpeaking() {
        // console.log("End speaking");
        background(0);
    }
}

function mousePressed() {
    speech.setVoice("Google Deutsch");
    speech.speak("Hallo Jörg, wie geht es Dir?");
}
