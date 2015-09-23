var input,
    analyzer,
    click,
    bpm;


function preload() {
    click = loadSound('static/media/clickv1.mp3');
}

function setup() {
    var canvas = createCanvas(710, 200);

    canvas.parent('canvas');

    bpm = document.getElementById('bpm').value;

    frameRate(bpm / 60);
    background(255);

    // Create an Audio input
    //input = new p5.AudioIn();

    //input.start();
}

function draw() {
    bpm = document.getElementById('bpm').value;
    console.log("New bpm:");
    console.log(bpm / 60);
    frameRate(bpm / 60);
    ellipse(width / 2, height / 2, 70, 70);
    click.play();
}
