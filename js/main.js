'use strict';

////////////
// Functions
////////////

// A function to create every cell of the grid, with the proper classes and numbers and a click EventListener to console print the number of the cells
function elementCreation (elementType, className, secondClassName, i) {
    const element = document.createElement(elementType);
    element.classList.add(className);
    element.innerText = i;
    element.addEventListener('click', function() {
        console.log(i);
        element.classList.add(secondClassName);
    })

    return element;
}

////////////
// Main
////////////

// Thanks to a button, the user can generate a square grid
const play = document.querySelector('.play');
const containerGrid = document.querySelector('.grid');

play.addEventListener('click', function() {
    containerGrid.innerHTML = '';
    // Creation of the grid
    for (let i = 1; i <= 100; i++) {
        // The cells have the proper classes and numbers
        const cell = elementCreation('div', 'cell', 'active', i);
        containerGrid.append(cell);
}
})

// Before playing the game, the user can select the difficulty level of the game: easy, medium or hard
// The selection can be made through a `select`
// Easy: 100 cells, 10 per row
// Medium: 81 cells, 9 per row
// Hard: 49 cells, 7 per row
// In order to transform the code into a dynamic one, the number of cells to generate will be decided by recalling the proper function and by adding the correct value to the function arguments
// The number of cells in a row will be decided by a CSS class
// For each difficulty level, a function will add a proper class to the grid container
// These classes will set different sizes for the cells