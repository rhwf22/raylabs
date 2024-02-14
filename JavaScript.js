var toggleCircle = true

window.onload = function() {
	var button = document.getElementById("target");
  var valueHeight = document.getElementById("heightSlider");
  var valueWidth = document.getElementById("widthSlider");
  const changeHeight = document.getElementById("heightSlider");
  const changeWidth = document.getElementById("widthSlider");

	changeWidth.addEventListener = ("change", () => {
    console.log(valueWidth.value)
    button.style.width = valueWidth.value + "px";
  });
	
	changeHeight.oninput = function() {
		button.style.height = this.value + "px";
	}
}

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

  var button = document.getElementById("target");
  var valueHeight = document.getElementById("heightSlider");
  var valueWidth = document.getElementById("widthSlider");
  const changeHeight = document.getElementById("heightSlider");
  const changeWidth = document.getElementById("widthSlider");

  changeWidth.oninput = function() {
    button.style.width = this.value + "px";
  }
	// changeWidth.addEventListener = ("change", () => {
  //   console.log(valueWidth.value)
  //   button.style.width = valueWidth.value + "px";
  // });
	
	changeHeight.oninput = function() {
		button.style.height = this.value + "px";
	}

  var togglecircle = document.getElementById("toggleCircle");

  togglecircle.addEventListener("click", ()=>{
    toggleCircle = !toggleCircle
    if (toggleCircle == true) {
      button.className = "circleTarget";
      togglecircle.className = "";
    }
    else {
      button.className = "";
      togglecircle.className = "circleTarget";
    }
  })
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
