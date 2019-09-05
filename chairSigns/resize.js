var elemDiv = document.getElementById('a'),
  elemInput = document.getElementById('b');

elemDiv.onblur = function() {
  elemInput.value = elemDiv.innerHTML;
  
  clientWidth = document.documentElement.clientWidth; 
  clientHeight = document.documentElement.clientHeight; 

// Grow: 
  divWidth = elemDiv.clientWidth; 
  divHeight = elemDiv.clientHeight; 
  fontSize = 10; 
  while (divWidth < clientWidth && divHeight < clientHeight) {
    fontSize *= 2; 
    document.getElementById("a").style.fontSize = fontSize + "px";
    document.getElementById("b").style.fontSize = fontSize + "px";  
    divWidth = elemDiv.clientWidth; 
    divHeight = elemDiv.clientHeight; 
  } 

// Shrink: 
  while (divWidth > clientWidth || divHeight > clientHeight) {
    fontSize *= 0.9; 
    document.getElementById("a").style.fontSize = fontSize + "px";
    document.getElementById("b").style.fontSize = fontSize + "px";  
    divWidth = elemDiv.clientWidth; 
    divHeight = elemDiv.clientHeight; 
  } 
//  document.getElementById("a").innerHTML = 5+1 + "px";
//  document.getElementById("b").innerHTML = "stam";
}

var buttonBlink = document.createElement("Button");
buttonBlink.innerHTML = "blink";
buttonBlink.style = "bottom:0;right:0;position:absolute;z-index: 9999"
buttonBlink.onclick = function() {doBlink()};
document.body.appendChild(buttonBlink);

function doBlink() {
    
  document.body.style.backgroundColor = "gray";
}
