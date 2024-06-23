var elemDiv = document.getElementById('shown');
var elemInput = document.getElementById('hidden');
var elemPlus = document.getElementById('plus');
var elemMinus = document.getElementById('minus');

var counter = 10;
elemDiv.innerHTML = counter;

function plus() {
    counter += 1;
    elemDiv.innerHTML = counter;
    fitSize();
}

function minus() {
    counter -= 1;
    elemDiv.innerHTML = counter;
    fitSize();
}

function fitSize() {
  elemInput.value = elemDiv.innerHTML;

  clientWidth = document.documentElement.clientWidth;
  clientHeight = document.documentElement.clientHeight;

  divWidth = elemDiv.clientWidth;
  divHeight = elemDiv.clientHeight;
  fontSize = 10;
  while (divWidth < clientWidth && divHeight < clientHeight) {
    fontSize *= 2;
    document.getElementById("shown").style.fontSize = fontSize + "px";
    document.getElementById("hidden").style.fontSize = fontSize + "px";  
    divWidth = elemDiv.clientWidth;
    divHeight = elemDiv.clientHeight;
  }

  while (divWidth > clientWidth || divHeight > clientHeight) {
    fontSize *= 0.9;
    document.getElementById("shown").style.fontSize = fontSize + "px";
    document.getElementById("hidden").style.fontSize = fontSize + "px";  
    divWidth = elemDiv.clientWidth;
    divHeight = elemDiv.clientHeight;
  }
}

fitSize();
window.addEventListener('resize', fitSize);

function doBlink() {
     document.body.style.animation = "glowing 200ms infinite";

    setTimeout(function() {
        document.body.style.animation = "";
    }, 1000);
}
