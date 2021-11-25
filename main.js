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

function modalLoaded(){
    console.log("modalLoaded");
    status = "true"
    video.loop()
    video.speed(1)
    video.volume(0)
}

function gotResults(error, results){
     if (error){
         console.log("error");
     }
     console.log("got the results");
     objects = results;
}

function draw(){
    Image(video, 0,0,480,350);
    if (status != ""){
        objectDetector.detect(video, gotResults);
        for (i = 0; i < objects.length; i++){
               document.getElementById("status").innerHTML = "Status: Objects Detected";
               document.getElementById("number_of_objects").innerHTML = "Number of Objects detected: " + objects.length;

               Fill("#FF0000");
               percent = floor(objects[i].confidence * 100);
               Text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
               noFill();
               stroke("#FF0000");
               rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

        }
    }
}