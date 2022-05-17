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

// When size is submitted by the user, call makeGrid()
// Listens for an event on the submit button.
sizeInput.addEventListener("submit", function (event) {
    // Resets the grid.
    tableInput.innerHTML = " ";
    event.preventDefault()
    // Invoking the makeGrid function to accept user  input values.
    makeGrid(heightInput.value, widthInput.value);

});

// Listens for event to change background color on grid. Event interface interacts with the DOM HTML tag 'td' on click.
tableInput.addEventListener("click", function (event) {
    if (event.target.nodeName === "TD") {
        event.target.style.backgroundColor = colorInput.value;
    }
})

// This function takes two parameters of height and width // values. makeGrid function to create the grid canvas.
function makeGrid(heightInput, widthInput) {
    // Nesting for loops as an _N by M_grid
    for (let r = 0; r < heightInput; r++) {
        const tableRow = tableInput.insertRow(r);
        for (let c = 0; c < widthInput; c++) {
            tableRow.insertCell(c);
        }

    }

}


