"use strict";

var squaresNumber = 6;
var squares = document.getElementsByClassName("square");
var h1 = document.getElementById("heading");
var colorDisplay = document.getElementById("colorDisplay");
var reset = document.getElementById("reset");
var mode = document.getElementsByClassName("mode");
var colors = [];
var pickedColor;

// Pirmas krovimas
init();

function init() {
  //uzkrauna h1 fona ir parodo kvadratelius
  h1.style.background = "steelblue";
  for (var x of squares) {
    x.style.visibility = "visible";
  }

  //uzkrauna spalvas
  loadColors(squaresNumber);

  //Pasirenka random spalva
  pickedColor = colorPicker();

  //nustato zaidimo sunkuma

  // 1 variantas
  // generateSquares();

  gameModes();
}

//Grazina random spalva
function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

//uzkarauna random spalvas kvadrateliams
function loadColors() {
  colors = [];
  for (var i = 0; i < squaresNumber; i++) {
    var random = randomColor();
    squares[i].style.background = random;

    //prideda i masyva
    colors.push(random);
  }
}

//pasirenka spalva is spalvu masyvo
function colorPicker() {
  var random = Math.floor(Math.random() * colors.length);
  colorDisplay.innerText = colors[random];
  return colors[random];
}

// Kvadrateliu spalvos tikrinimas
for (var x of squares) {
  x.addEventListener("click", function () {
    if (this.style.background == pickedColor) {
      for (var x of squares) {
        x.style.visibility = "visible";
        x.style.background = pickedColor;
        h1.style.background = pickedColor;
      }
    } else {
      this.style.visibility = "hidden";
    }
  });
}

reset.addEventListener("click", init);

//kvadrateliu sukurimas
function generateSquares() {
  for (var x of squares) {
    x.style.display = "none";
  }

  for (var i = 0; i < squaresNumber; i++) {
    squares[i].style.display = "block";
  }
}

function gameModes() {
  for (var x of mode) {
    x.addEventListener("click", function () {
      mode[0].classList.remove("selected");
      mode[1].classList.remove("selected");
      if (this.textContent == "easy") {
        squaresNumber = 3;
        this.classList.add("selected");
      } else if (this.textContent == "hard") {
        squaresNumber = 6;
        this.classList.add("selected");
      }

      generateSquares();
      init();
    });
  }
}

// 1 variantas

// mode[0].addEventListener("click", function () {
//   for (var x of mode) {
//     x.classList.remove("selected");
//   }

//   this.classList.add("selected");
//   squaresNumber = 3;
//   init();
// });

// mode[1].addEventListener("click", function () {
//   for (var x of mode) {
//     x.classList.remove("selected");
//   }

//   this.classList.add("selected");
//   squaresNumber = 6;
//   init();
// });
