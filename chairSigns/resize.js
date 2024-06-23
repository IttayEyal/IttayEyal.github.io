var elemDiv = document.getElementById('shown'); 
var elemInput = document.getElementById('hidden');
var elemPlus = document.getElementById('plus');
var elemMinus = document.getElementById('minus');

var counter = 10; 
elemDiv.innerHTML = counter; 

// elemPlus.onclick = function() {
//     counter += 1; 
//     elemDiv.innerHTML = counter; 
//     fitSize(); 
// };
// 
// elemMinus.onclick = function() { 
//     counter -= 1; 
//     elemDiv.innerHTML = counter; 
//     fitSize(); 
// };

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

// elemDiv.oninput = function() {
function fitSize() {
  elemInput.value = elemDiv.innerHTML;
  
  clientWidth = document.documentElement.clientWidth; 
  clientHeight = document.documentElement.clientHeight; 

// Grow: 
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

// Shrink: 
  while (divWidth > clientWidth || divHeight > clientHeight) {
    fontSize *= 0.9; 
    document.getElementById("shown").style.fontSize = fontSize + "px";
    document.getElementById("hidden").style.fontSize = fontSize + "px";  
    divWidth = elemDiv.clientWidth; 
    divHeight = elemDiv.clientHeight; 
  } 
//  document.getElementById("shown").innerHTML = 5+1 + "px";
//  document.getElementById("hidden").innerHTML = "stam";
}

// Run fitSize at initialization
fitSize();

// Run fitSize whenever the window is resized
window.addEventListener('resize', fitSize);

// var buttonBlink = document.createElement("Button");
// buttonBlink.innerHTML = "blink";
// buttonBlink.style = "bottom:0;right:0;position:absolute;z-index: 9999"
// buttonBlink.onclick = function() {doBlink()};
// document.body.appendChild(buttonBlink);
// 
function doBlink() { 
     document.body.style.animation = "glowing 200ms infinite";
//     document.body.style.backgroundColor = "red";

    setTimeout(function() {
        document.body.style.animation = "";
    }, 1000);

}
