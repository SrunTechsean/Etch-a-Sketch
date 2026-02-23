const container = document.querySelector(".container");
const submitButton = document.querySelector("button");
const menu = document.querySelector(".menu");

const MAX_GRID = 100;
let gridValue = 16;
let paintColor = "black";

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
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < gridValue; i++) {
        // Generate Row Container
        const rowContainer = document.createElement("div");
        rowContainer.classList.add("row-container");
        fragment.appendChild(rowContainer);
        generateRow(rowContainer);
    }
    container.appendChild(fragment);
}

generateGrid();

// Generate Random HEX Coloring
function getRandomHexColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

// Clear the canvas
function clearGrid() {
    container.innerHTML = "";
    generateGrid();
}



// Set brush Coloring
menu.addEventListener("click", (e) => {
    if (e.target.className === "black-btn") {
        paintColor = "black";
    } else if (e.target.className === "rainbow-btn") {
        paintColor = "rainbow";
    } else if (e.target.className === "clear-btn") {
        clearGrid();
    } else {
        paintColor = "black";
    }
})

// Coloring the pixel
container.addEventListener("mouseover", (e) => {
    if (paintColor === "black") {
        e.target.style.backgroundColor = "#000000";
        console.log("black");
    } else if (paintColor === "rainbow") {
        const rainbow = getRandomHexColor();
        e.target.style.backgroundColor = rainbow;
        console.log("rainbow");

    } else {
        e.target.style.backgroundColor = "#000000";
    }
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
    clearGrid();
})


