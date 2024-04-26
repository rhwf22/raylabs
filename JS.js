var scentence = "ray is a monkey and this is his type test";
var keysTyped = ""
var lettersTyped = 0;
var averageLength = 0;
var started = false;
var done = false;
var startTime = new Date();
var endTime = new Date();
console.log(startTime)
// document.addEventListener("load", ()=>{
//     console.log("loaded");
//     startTime.getTime();
// })
window.addEventListener("keydown", (event)=>{
    if (started == false) {
        startTime = Date.now();
        started = true;
        console.log('started');
        console.log(startTime);
    }
    typing(event.key);
})
function typing(key) {
    if (key.length == 1) {
        lettersTyped++;
        keysTyped = keysTyped + key;
        let characterstyped = document.getElementById("characters").innerHTML = "Characters typed: " + lettersTyped;
        let userInput = document.getElementById("scentencetyped").innerHTML = keysTyped;
    }
    if (lettersTyped >= scentence.length) {
        finished();
    }
}
function finished() {
    if (done)  {return}
    averageLength = (scentence.length) / 10;
    endTime = Date.now();
    console.log(endTime);
    let timeTaken = endTime - startTime;
    console.log(timeTaken);
    var wpm = Math.floor((((lettersTyped / averageLength) / timeTaken) * 60) * 1000);
    let wordperminute = document.getElementById("wpm").innerHTML = "WPM: " + wpm;
    console.log(timeTaken);
    done = true;
}
