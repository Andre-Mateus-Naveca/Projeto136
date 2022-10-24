video = "";
valorInput = "";
status1 = false;
objects = [];
function preload()
{

}
function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(380, 380);
    video.hide();
}
function start(){

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detectando Objetos";
    document.getElementById("chosedObject").value = valorInput;
}
function modelLoaded() {
    console.log("Modelo Carregado!");
    status1 = true;
}
function draw()
{
    image(video, 0, 0, 380, 380)
}
