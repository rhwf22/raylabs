function correct() {
  if (timeleft <= 0) {
    return
  }
  let score = parseInt(document.querySelector('.score').innerHTML);
  document.querySelector('.score').innerHTML = score + 1;
  change()
}

function incorrect() {
  let score = parseInt(document.querySelector('.score').innerHTML);
  document.querySelector('.score').innerHTML = score - 1;
}

var w = window.innerWidth-100;
var h = window.innerHeight-95;

function load(){
  var b = document.querySelector("#target");
  b.onclick = function(){
    correct()
  }
  var startBtn = document.getElementById("header")
  startBtn.onclick = function(){
    startBtn.style.display = "none"
    document.querySelector('.score').innerHTML = 0
    timeleft = 11
  }

}

function change()
{
  // var b = document.querySelector("#target");
  var b = document.getElementById("target")
  var i = Math.floor(Math.random()*w)+1;
  var j = Math.floor(Math.random()*h)+1;
  b.style.left = i+"px";
  b.style.top = j+"px";
}

// (document).ready(function() { 
//   $("#header").click(function() { 
//       $(this).hide(); 
//       ;
//   }); 
//   }); 

var timeleft = 11;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
  }
  document.getElementById("progressBar").value = 11 - timeleft;
  timeleft -= 1;
}, 1100);
