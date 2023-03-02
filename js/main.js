'use strict';

////////////
// Functions
////////////

// A function to create an element
function elementCreation (elementType) {
    const element = document.createElement(elementType);

    return element;
}

// A function to add a class to an element
function addClass (element, className) {
    element.classList.add(className);
}

// A function to index a generic element
function addIndex (element, i) {
    element.innerText = i;
}

////////////
// Main
////////////

// Thanks to a button, the user can generate a square grid
const containerGrid = document.querySelector('.grid');
const play = document.querySelector('.play');

play.addEventListener('click', function() {
    containerGrid.innerHTML = '';

    // Before playing the game, the user can select the difficulty level of the game: easy, medium or hard
    // The number of cells will be decided by recalling the proper function and by adding the correct value to the function arguments
    const difficulty = document.getElementById('difficulty').value;
    let cells = 0;
    let row = 0;

    if (difficulty === '') {
        alert('Seleziona la difficoltà!')
    } else if (difficulty === 'easy') {
        cells = 100;
        row = 10;
    } else if (difficulty === 'medium') {
        cells = 81;
        row = 9;
    } else if (difficulty === 'hard') {
        cells = 49;
        row = 7;
    }

    // Creation of the grid
    for (let i = 1; i <= cells; i++) {
        // The cells have the proper classes and numbers
        const cell = elementCreation('div');
        addClass(cell, 'cell');
        addIndex(cell, i);

        // The number of cells in a row will be decided by a CSS class
        if (row === 10) {
            cell.classList.add('cell-10');
        } else if (row === 9) {
            cell.classList.add('cell-9');
        } else if (row === 7) {
            cell.classList.add('cell-7');
        }

        containerGrid.append(cell);

        cell.addEventListener('click', function() {
            addClass(cell, 'active');
            console.log(i);
        })
    }
})