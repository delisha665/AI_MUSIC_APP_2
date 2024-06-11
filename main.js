function preload(){
    hp_sound=loadSound("harry_potter.mp3");
    pp_sound=loadSound("peter_pan.mp3");
}
function setup() {
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,400,400);

}
