Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("webcam");
Webcam.attach('#camera');
function snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("image").innerHTML = '<img id="preview" src="'+data_uri+'"/>'
    });
}
console.log('ml5 version', ml5.version);
//https://teachablemachine.withgoogle.com/models/z55d0Zn3L/