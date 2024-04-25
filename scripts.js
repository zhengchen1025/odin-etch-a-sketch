const container = document.getElementById("container");
const sqrDivs = document.getElementsByClassName("sqrDiv");

function createGrid() {
  for (let i = 0; i < 256; i++) {
    container.innerHTML += `<div class='sqrDiv' id='div${i}'></div>`;
  }
}

createGrid();

function addStyle() {
  for (let i = 0; i < sqrDivs.length; i++) {
    sqrDivs[i].style.width = "40px";
    sqrDivs[i].style.height = "40px";
    sqrDivs[i].style.borderColor = "black";
    sqrDivs[i].style.backgroundColor = "antiquewhite";
    sqrDivs[i].style.flexBasis = "calc(100% / 16)";
  }
}

addStyle();
