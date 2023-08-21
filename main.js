// https://teachablemachine.withgoogle.com/models/6ulGJ9FTX/ */

function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio : true })
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/6ulGJ9FTX/model.json", modelReady); 
}

function modelReady(){
    console.log("model has been initialized")
    classifier.classify(gotResults)
}

function gotResults(error, results){
    if(error){
        console.log(error)
    }
    console.log(results)
}