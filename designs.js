// Select color input
const colorInput = document.getElementById("colorPicker");// Select size input
const sizeInput = document.getElementById("sizePicker");
// Table input
const tableInput = document.getElementById("pixelCanvas");
// Input for height value
const heightInput = document.getElementById("inputHeight").value;
// Input for width value
const widthInput = document.getElementById("inputWidth").value;


// Listens for an event on the submit button.
sizeInput.addEventListener("submit", function (event) {
    event.preventDefault()
    // Logic to add the grid.
    makeGrid()
})

tableInput.addEventListener("click", function (event) {
    if (event.target.nodeName === 'TD') {

    }
})

// When size is submitted by the user, call makeGrid()

// function makeGrid() {

//     }