const container = document.querySelector(".container");
const submitButton = document.querySelector("button");

const MAX_GRID = 100;
let gridValue = 16;
// Generate a row of pixel 
function generateRow(rowContainer) {
    for (let i = 0; i < gridValue; i++) {

        // Generate each pixel of the row
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");

        rowContainer.appendChild(pixel);
    }
}

// Generate full grid 
function generateGrid() {
    for (let i = 0; i < gridValue; i++) {
        // Generate Row Container
        const rowContainer = document.createElement("div");
        rowContainer.classList.add("row-container");
        container.appendChild(rowContainer);
        generateRow(rowContainer);

    }
}

generateGrid();

// Coloring the pixel
container.addEventListener("mouseover", (e) => {
    e.target.classList.add("bg-red");
})

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const gridInput = document.querySelector("#gridInput");

    let inputValue = Number(gridInput.value);
    if (inputValue <= 0) {
        gridValue = 16;
    } else if (inputValue > 100) {
        gridValue = 100;
    } else {
        gridValue = inputValue;
    }

    // Remove Old grid
    container.innerHTML = "";
    generateGrid();
})


