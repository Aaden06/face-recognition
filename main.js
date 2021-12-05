Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
})
camera = document.getElementById("camera");
Webcam.attach('#camera');
function snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("image").innerHTML = '<img id="preview" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/z55d0Zn3L/model.json', modelLoaded);
function modelLoaded(){
    console.log("model loaded!");
}
function check(){
    img = document.getElementById("preview");
    classifier.classify(img, gotResult);
}
function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("object_name").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}

//https://teachablemachine.withgoogle.com/models/z55d0Zn3L/