var input,
    clickMp3,
    bpm,
    beatsPerMeasure,
    currentBeatNumber,
    rectWidth = 100,
    setTempoTaps = [],
    initialTempoTap = null,
    clickActive = false,
    numClicks;

function preload() {
    clickMp3 = loadSound('static/media/clickv1.mp3');
}

function setup() {
    var canvas = createCanvas(windowWidth - 10, 400);

    numClicks = 0;

    canvas.parent('canvas');

    bpm = document.getElementById('bpmRange').value;
    currentBeatNumber = 0;
    frameRate(bpm / 60);
    background(255);
}

function draw(doClick) {
    var beatsPerMeasure = document.getElementById('beatsPerMeasure').value,
        hasTimeSig = document.getElementById('hasTimeSig').checked;

    //ellipse(width / 2, height / 2, 70, 70);
    noStroke();
    fill(175);
    rect(width / 2 - (rectWidth / 2), 0, rectWidth, height);
    stroke(2);
    line(width / 2 - (rectWidth / 2), 0, width / 2 + (rectWidth / 2) - 1, 0);

    // do not click if called from the range updating
    if (typeof doClick !== 'undefined' && !doClick) {
        return;
    }

    //console.log("About to click: ", doClick);
    if (clickActive) {
        console.log(hasTimeSig);
        if (!hasTimeSig || !beatsPerMeasure) {
            clickMp3.amp(1);
        } else if (beatsPerMeasure && numClicks % beatsPerMeasure === 0) {
            clickMp3.amp(2);
        } else {
            clickMp3.amp(0.5);
        }

        clickMp3.play();
        numClicks += 1;
    }
}
