var input,
    click,
    bpm,
    currentDate,
    lastUpdate;


function preload() {
    click = loadSound('static/media/clickv1.mp3');
}

function setup() {
    var canvas = createCanvas(710, 200);

    canvas.parent('canvas');

    bpm = document.getElementById('bpm').value;

    frameRate(bpm / 60);
    currentDate = new Date();
    lastUpdate = currentDate.getTime();
    background(255);
}

function drawWrapper(value) {
    var newDate = new Date(),
        thisUpdate = newDate.getTime();

    frameRate(value / 60);

    // Avoid annoying repeated clicks on update
    if (thisUpdate - lastUpdate <= 500) {
        return;
    }

    lastUpdate = thisUpdate;

    console.log("Updating");

    draw();
}

function draw() {
    ellipse(width / 2, height / 2, 70, 70);
    click.play();
}
