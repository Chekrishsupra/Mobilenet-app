Webcam.set({
    width: 310,
    height: 300,
    image_format: "png",
    png_quality: 90,
    constraints: {
        facingMode: "environment"
    }
});
camera = document.getElementById("camera");
Webcam.attach("#camera");
function take_picture() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='captured_image' src='"+data_uri+"'>";
    });
}
console.log("Ml5 version:",ml5.version);
classifier = ml5.imageClassifier('MobileNet',ModelLoaded);
function ModelLoaded() {
    console.log("Model is loaded");
}
function check() {
    img = document.getElementById("captured_image");
    classifier.classify(img,gotResult);
}
function gotResult(error,results) {
    if(error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("object_name").innerHTML = results[0].label;
    }
}