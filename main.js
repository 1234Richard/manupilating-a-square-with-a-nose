noseX = 0;
noseY = 0;
difference = 0;
rightWrist = 0;
leftWrist = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550 ,550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("PoseNet IS Initialised");
}

function draw() {
    background('#969A97');

    document.getElementById('square_size').innerHTML = "Width and Height of a Square will be = " + difference + "px";
    fill('#F90093');
    stroke('#F90093')
    square(noseX, noseY, difference);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseeX = " + noseX, ", noseY = " + noseY);

        rightWrist = results[0].pose.rightWrist.x;
        leftWrist = results[0].pose.leftWrist.y;
        difference = floor(leftWrist - rightWrist);

        console.log("LeftWrist = " + leftWrist + ", RightWrist = " + rightWrist + ", difference = " + difference);

    }
}
