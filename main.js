//https://teachablemachine.withgoogle.com/models/AHWwfbYCa/
Webcam.set({
    width: 350,
    height: 300,
    image_format:'jpg',
    jpg_quality: 90
});

camera=document.getElementById("camera");
Webcam.attach("#camera");

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_img" src="'+data_uri+'"/>';
    })
}
console.log("ml5 version: ",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/AHWwfbYCa/",modelLoaded);

function modelLoaded(){
    console.log("modelLoaded");
}