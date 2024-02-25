// SKETCH BOARD SETUP
// Create a grid of cells on the sketch board
function createGrid(cellsPerRow) {
    const sketchBoard = document.querySelector(".sketch-board");
    sketchBoard.style.cssText = `grid-template: repeat(${cellsPerRow}, 1fr) / repeat(${cellsPerRow}, 1fr)`;
    for (let i = 0; i < cellsPerRow ** 2; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        sketchBoard.appendChild(cell);
    }
}
createGrid(16); // Create the default grid

// MODE SELECTION BUTTONS
const modesButtons = document.querySelectorAll(".btn");
modesButtons.forEach(button => {
    button.addEventListener("click", pickMode);
});

// Clear previous event listeners from cells
function removeCellEventListeners() {
    const gridCells = document.querySelectorAll(".cell");
    gridCells.forEach(cell => {
        cell.removeEventListener("mouseover", colorMode);
        cell.removeEventListener("mouseover", rainbowMode);
        cell.removeEventListener("mouseover", eraserMode);
    });
}

// Select and apply drawing modes
function pickMode(e) {
    removeCellEventListeners(); // Remove previous event listeners
    const gridCells = document.querySelectorAll(".cell");
    gridCells.forEach(cell => {
        if (e.target.id === "colorMode") {
            cell.addEventListener("mouseover", colorMode);
        } else if (e.target.id === "rainbowMode") {
            cell.addEventListener("mouseover", rainbowMode);
        } else if (e.target.id === "eraser") {
            cell.addEventListener("mouseover", eraserMode);
        } else {
            cell.style.backgroundColor = "white";
        }
    });
}

// DRAWING MODES
function colorMode(e) {
    const colorInput = document.querySelector(".color-wheel");
    e.currentTarget.style.backgroundColor = colorInput.value;
}

function rainbowMode(e) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    e.currentTarget.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function eraserMode(e) {
    e.currentTarget.style.backgroundColor = "white";
}

// GRID SIZE ADJUSTMENT
const slider = document.querySelector("#slider");
const sliderPara = document.querySelector(".slider-text");
slider.addEventListener("input", () => {
    const gridCells = document.querySelectorAll(".cell");
    gridCells.forEach(cell => cell.remove());
    createGrid(slider.value);
    sliderPara.textContent = `${slider.value} x ${slider.value}`;
});
