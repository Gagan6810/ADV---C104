Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:100
});

Webcam.attach("#camera");

function take_snapshot(){

    Webcam.snap(function(data_uri){
        document.getElementById('captured_image').innerHTML = "<img id='snapshot' src='" + data_uri + "'/>";
        console.log("picture taken");
    });
}

console.log('ml5 version is' + ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/nTEDSnrn2/model.json", modelLoaded);

function modelLoaded(){
    console.log('Model is Loaded');
}
