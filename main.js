img =""
status=""
objects=[]

function setup(){
canvas = createCanvas(640,420);
canvas.center();
object_detector=ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML="status:detecting object";


}

function preload(){
img = loadImage('dog_cat.jpg');
}

function draw(){
image(img, 0, 0, 640, 420);
if(status != ""){
    for(i=0; i<objects.length;i++){

    
document.getElementById("status").innerHTML="status:object detected";
fill("#E53935");
percent = floor(objects[i].confidence*100)
text(objects[i].label + " " + percent + "%" , objects[i].x, objects[i].y)
noFill();
stroke("#E53935");
rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
    }

}
}

function modelLoaded(){
    console.log("modelLoaded");
    status=true;
    object_detector.detect(img,gotResult);

}

function gotResult(error,results){
if(error){
    console.error(error);
}


    console.log(results);
    objects=results

}

