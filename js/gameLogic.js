// SKETCH BOARD
// Create the sketch-board's grid of cells
function createGrid(cellCount) {
    const sketchBoard = document.querySelector(".sketch-board");
    let cellDimension = Math.sqrt(sketchBoard.clientHeight ** 2 / cellCount);
    for (let i = 0; i < cellCount; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.setAttribute("style", `background-color: white; width: ${cellDimension}px; height: ${cellDimension}px;`);
        sketchBoard.appendChild(cell);
    }
}
createGrid(16*16) // create the default grid