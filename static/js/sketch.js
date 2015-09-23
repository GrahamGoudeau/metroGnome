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

/*
function draw() {
    // Get the overall volume (between 0 and 1.0)
    var volume = input.getLevel(),
        threshold = 0.1,
        y = map(volume, 0, 1, height, 0),
        ythreshold = map(threshold, 0, 1, height, 0),
        total,
        d = new Date(),
        mills = d.getTime();

    click.play();

    dataSet.push(volume);
    dataPoints += 1;
    if (dataPoints % 30 === 0) {
        total = dataSet.reduce(function (a, b) {
            return a + b;
        });

        total = total / 30;
        console.log(total);
        dataPoints = 0;
        dataSet = [];
    }
    // If the volume > 0.1,  a rect is drawn at a random location.
    // The louder the volume, the larger the rectangle.
    if (volume > threshold) {
        stroke(0);
        fill(0, 100);
        //rect(random(40, width), random(height), volume * 50, volume * 50);
    }

    // Graph the overall potential volume, w/ a line at the threshold

    noStroke();
    fill(175);
    rect(0, 0, 20, height);
    // Then draw a rectangle on the graph, sized according to volume
    fill(0);
    rect(0, y, 20, y);
    stroke(0);
    line(0, ythreshold, 19, ythreshold);
}
*/
