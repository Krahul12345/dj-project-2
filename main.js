song = "";
song2 = "";

function preload(){
    song = loadSound("//cdnjs.cloudflare.com/ajax/libs/p5.js/1.6.0/addons/p5.sound.min.js");
    song2 = loadSound("")
}

function setup() {
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function play() {
    song.play();
}