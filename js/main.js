'use strict';

////////////
// Functions
////////////

// A function to create every cell of the grid
function elementCreation (elementType, className) {
    const element = document.createElement(elementType);
    element.classList.add(className);

    return element;
}

////////////
// Main
////////////

// The grid will then be created by JavaScript through some functions
const containerGrid = document.querySelector('.grid');

for (let i = 1; i <= 100; i++) {
    // Thanks to the functions, we will be able to give them the proper CSS classes
    const cell = elementCreation('div', 'cell');
    containerGrid.append(cell);
}

// Thanks to a button, the user can generate a square grid
// Thanks to the functions, we will be able to give them all the numbers between 1 and 100
// Then, we can append the cells to the grid, 10 per row
// Through another function, we can make the cells clickable
// So, with a click, the user will be able to generate a console message with the proper number of the cell and to change the color of the same cell


// Before playing the game, the user can select the difficulty level of the game: easy, medium or hard
// The selection can be made through a `select`
// Easy: 100 cells, 10 per row
// Medium: 81 cells, 9 per row
// Hard: 49 cells, 7 per row
// In order to transform the code into a dynamic one, the number of cells to generate will be decided by recalling the proper function and by adding the correct value to the function arguments
// The number of cells in a row will be decided by a CSS class
// For each difficulty level, a function will add a proper class to the grid container
// These classes will set different sizes for the cells