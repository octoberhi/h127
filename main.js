song1="";
song2="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
function preload()
{
song1 = loadSound("song1.mp3");
song2 = loadSound("Mask.mp3");
}
function setup()
{
canvas = createCanvas(700,450);
canvas.center();
video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on("pose", gotPoses);
}
function modelLoaded()
{
console.log("Model is loaded");
}

function gotPoses(results)
{
if(results.length > 0)
{
console.log(results);

leftWristX = results[0].pose.leftWrist.x;
leftWristY = results[0].pose.leftWrist.y;
rightWristX = results[0].pose.rightWrist.x;
rightWristY = results[0].pose.rightWrist.y;
}
}

function draw()
{
image(video, 0,0,700,450);
}