noseX=0;
noseY=0;

function preload() {
  clown_nose = loadImage('https://i.postimg.cc/RCDsXnfw/mask.png');
}
function setup(){
    canvas = createCanvas(500,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500,500);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
       noseX = results[0].pose.rightEar.x;
       noseY = results[0].pose.rightEar.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function draw(){
image(video,0,0,500,500);
image(clown_nose, noseX, noseY-150, 300, 300);
}

function take_snapshot(){
    save('myFilterImage.png');
}
