objects = [];
status = "";

function preload(){
    video = createVideo("");
}

function setup(){
    canvas = createCanvas(480, 360);
    canvas.center();
    video.hide()
}

function start(){
    objectDetector = ml5.objectDetector("cocossd", modalLoaded);
}
