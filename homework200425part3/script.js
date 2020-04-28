// 3. Create an HTML page with traffic lights and a button that switches the color to the next one.
// Do not forget to use CSS

function clearLights() {
  document.getElementById("stopLight").style.backgroundColor = "black";
  document.getElementById("slowLight").style.backgroundColor = "black";
  document.getElementById("goLight").style.backgroundColor = "black";
}

let index = 0;

function illuminateTrafficlights() {
  clearLights();

  if (index == 0) {
    document.getElementById("stopLight").style.backgroundColor = "red";
  } else if (index == 1 || index == 3) {
    document.getElementById("slowLight").style.backgroundColor = "yellow";
  } else if (index == 2) {
    document.getElementById("goLight").style.backgroundColor = "green";
  }

  if (index < 3) {
    index++;
  } else {
    index = 0;
  }
}

//--------------------------------------------------------------------
