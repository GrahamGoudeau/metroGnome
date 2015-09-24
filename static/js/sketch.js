var input,
    clickMp3,
    bpm,
    beatsPerMeasure,
    currentBeatNumber,
    numberFrames = 0;


function preload() {
    clickMp3 = loadSound('static/media/clickv1.mp3');
}

function setup() {
    var canvas = createCanvas(710, 200);

    canvas.parent('canvas');

    bpm = document.getElementById('bpmRange').value;
    //beatsPerMeasure = document.getElementById('beatsPerMeasure').value;
    currentBeatNumber = 0;
    frameRate(bpm / 60);
    background(255);
}

function drawWrapper(value) {
    frameRate(value / 60);

    // do not click if called from the range updating
    draw(false);
}

function draw(doClick) {
    numberFrames += 1;
    console.log(numberFrames);
    ellipse(width / 2, height / 2, 70, 70);

    // do not click if called from the range updating
    if (typeof doClick !== 'undefined' && !doClick) {
        return;
    }

    clickMp3.play();
}
