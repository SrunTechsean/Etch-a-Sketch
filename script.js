const MAX_GRID = 100;
let grid = 16;

const container = document.querySelector(".container");

// Generate a row of pixel 
function generateRow(rowContainer) {
    for (let i = 0; i < grid; i++) {

        // Generate each pixel of the row
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");

        rowContainer.appendChild(pixel);
    }
}

// Generate full grid 
function generateGrid() {
    for (let i = 0; i < grid; i++) {
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
