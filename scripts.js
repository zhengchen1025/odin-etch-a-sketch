const container = document.getElementById("container");
const sqrDivs = document.getElementsByClassName("sqrDiv");
const askNewGrid = document.getElementById("askNewGrid");
let sqrsPerSide = 16;

function createGrid() {
  for (let i = 0; i < sqrsPerSide * sqrsPerSide; i++) {
    container.innerHTML += `<div class='sqrDiv' id='div${i}'></div>`;
  }
}

function addStyle() {
  for (let i = 0; i < sqrDivs.length; i++) {
    sqrDivs[i].style.height = "100%";
    sqrDivs[i].style.border = "1px solid black";
    sqrDivs[i].style.backgroundColor = "antiquewhite";
    container.style.gridTemplateColumns = `repeat(${sqrsPerSide}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${sqrsPerSide}, 1fr)`;
  }
}

createGrid();
addStyle();
addEventListeners();

function addEventListeners() {
  for (let i = 0; i < sqrDivs.length; i++) {
    const sqrDiv = sqrDivs[i];

    sqrDiv.addEventListener("mouseenter", () => {
      const randomColor = generateRandomColor();
      sqrDiv.style.backgroundColor = randomColor;
    });
    sqrDiv.addEventListener("mouseleave", () => {
      sqrDiv.style.backgroundColor = "antiquewhite";
    });
  }
}

const removeDivs = () => {
  while (sqrDivs.length > 0) {
    sqrDivs[0].remove();
  }
};

askNewGrid.addEventListener("click", () => {
  let userInput;
  do {
    userInput = prompt("how many squares per side do you like? (1-100)");
    if (userInput > 100 || userInput < 1) {
      alert("squares must be 1-100)");
    } else if (!Number.isInteger(Number(userInput))) {
      alert("please enter a INTEGER.");
    } else {
      sqrsPerSide = userInput;
      removeDivs();
      createGrid();
      addStyle();
      addEventListeners();
    }
  } while (
    !Number.isInteger(Number(userInput)) ||
    userInput > 100 ||
    userInput < 1
  );
});

function generateRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
