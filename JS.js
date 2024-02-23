var scentence = "ray is a monkey and this is his type test";
var lettersTyped = 0;
var averageLength = 0;
var started = false;
var done = false;
const startTime = new Date();
var endTime = new Date();

// document.addEventListener("load", ()=>{
//     console.log("loaded");
//     startTime.getTime();
// })
window.addEventListener("keydown", (event)=>{
    if (started == false) {
        startTime.getTime();
        started = true;
    }
    typing(event.key);
})
function typing(key) {
    lettersTyped++;
    if (lettersTyped >= scentence.length) {
        finished();
    }
}
function finished() {
    if (done)  {return}
    averageLength = (scentence.length - 9) / 10;
    console.log(averageLength);
    endTime = Date.now();
    let timeTaken = endTime - startTime;
    var wpm = Math.floor((((lettersTyped / averageLength) / timeTaken) * 60) * 1000);
    let wordperminute = document.getElementById("wpm").innerHTML = "WPM: " + wpm;
    console.log(timeTaken);
    done = true;
}