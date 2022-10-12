prediction=""

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");

webcam.attach('#camera');

function takeSnapshot(){
    webcam.snap(function(data_uri){
        document.getElementById("snapshot").innerHTML='<img id=captured_image src="'+data_uri+'"/>'
    });
}

console.log("ml5version:",ml5version);

classifier=imgClassifier("https://teachablemachine.withgoogle.com/models/2NdlssA4v/model.json",modelLoaded);

function modelLoaded(){
    console.log("model loaded!");
}
