img="";
status="";
objects=[];
function preload(){
img=loadImage("living room.jpeg");
}
function setup(){
canvas=createCanvas(640, 420);
canvas.center();
objectdetector=ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML="status= detecting objects";
}
function modelLoaded(){
    console.log("model has loaded");
    status="true";
objectdetector.detect(img,gotResults);
}
function gotResults(error,results){
    if(error){
        console.error(error);
    }
    
        console.log(results);
        objects=results;
    
}
function draw(){
image(img, 0,0, 640, 420);
if(status!=""){
for(var i=0;i<objects.length;i++){
    fill("red");
    document.getElementById("status").innerHTML="status: object detected";
    percent=floor(objects[i].confidence*100)
    text(objects[i].label+" "+percent+"%",objects[i].x+50,objects[i].y+50);
    noFill();
    stroke("red");
    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
}
}

}