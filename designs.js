// Select color input
const colorInput = document.getElementById("colorPicker");
// Select size input
const sizeInput = document.getElementById("sizePicker");
// Table input
const tableInput = document.getElementById("pixelCanvas");
// Input for height value
const heightInput = document.getElementById("inputHeight");
// Input for width value
const widthInput = document.getElementById("inputWidth");


// Listens for an event on the submit button.
sizeInput.addEventListener("submit", function (event) {
    event.preventDefault()
    // makeGrid function that accepts user input values.
    makeGrid(heightInput.value, widthInput.value);
});



// When size is submitted by the user, call makeGrid()

function makeGrid(heightInput, widthInput) {
    // Resets the grid.
    tableInput.innerHTML = "";
    // Logic to create the grid.
    for (let h = 0; h < heightInput.value; h += 1) {
        const row = tableInput.insertRow(0);
        for (let w = 0; w < widthInput.value; w += 1) {
            row.insertCell(0);
        }
    }


}