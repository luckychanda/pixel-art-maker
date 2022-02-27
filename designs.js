
var PixelArt = {};

//It fetches the inputs from UI
PixelArt.getInputs = function() {
  var height = document.querySelector("#inputHeight");
  var width = document.querySelector("#inputWidth");
  const button = document.querySelector("input[type=submit]");

  button.addEventListener("click", function(event) {
    event.preventDefault();
    var hValue = height.value;
    var wValue = width.value;
    PixelArt.makeGrid(hValue, wValue);
  });
};

//creates the canvas
PixelArt.makeGrid = function(height, width) {
  const table = document.getElementById("PixelCanvasArt");
  table.innerHTML = "";
  var color = document.querySelector("#colorPicker");
  for (let i = 0; i < height; i++) {
    var tr = document.createElement("tr");
    for (let w = 0; w < width; w++) {
      var td = document.createElement("td");
      td.classList.add("grid");
      tr.appendChild(td);
    }
    table.appendChild(tr);

  }

//adds colors to the blocks on click
  table.addEventListener("click", function(event) {
    if (event.target.tagName == "TD") {
      var td = event.target;
      td.style.backgroundColor = color.value;
    }
  });
};

//fetches the data when button is clicked
PixelArt.getInputs();
