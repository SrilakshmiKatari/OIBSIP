function appendToDisplay(character) {
    const display = document.getElementById('display');
    display.value += character;
}

// Function to evaluate and display the result
function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Replace special symbols with their JavaScript equivalents
        //filtering
        let expression = display.value.replace(/%/g, '/100');
        expression = expression.replace('√', 'Math.sqrt');
        expression = expression.replace('^', '**');

        // Evaluate the expression and display the result
        display.value = eval(expression);
    } catch (error) {
        display.value = 'Error';
    }
}

// Function to clear the calculator display
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

// Function to delete the last character from the display
function deleteLastCharacter() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Add event listeners for various buttons using their id-name attributes
document.getElementById('left-parentheses').addEventListener('click', () => appendToDisplay('('));
document.getElementById('right-parentheses').addEventListener('click', () => appendToDisplay(')'));
document.getElementById('del').addEventListener('click', deleteLastCharacter);
document.getElementById('cls').addEventListener('click', clearDisplay);
document.getElementById('seven').addEventListener('click', () => appendToDisplay('7'));
document.getElementById('eight').addEventListener('click', () => appendToDisplay('8'));
document.getElementById('nine').addEventListener('click', () => appendToDisplay('9'));
document.getElementById('percent').addEventListener('click', () => appendToDisplay('%'));
document.getElementById('power-of-2').addEventListener('click', () => appendToDisplay('^'));
document.getElementById('four').addEventListener('click', () => appendToDisplay('4'));
document.getElementById('five').addEventListener('click', () => appendToDisplay('5'));
document.getElementById('six').addEventListener('click', () => appendToDisplay('6'));
document.getElementById('multiple').addEventListener('click', () => appendToDisplay('*'));
document.getElementById('division').addEventListener('click', () => appendToDisplay('/'));
document.getElementById('one').addEventListener('click', () => appendToDisplay('1'));
document.getElementById('two').addEventListener('click', () => appendToDisplay('2'));
document.getElementById('three').addEventListener('click', () => appendToDisplay('3'));
document.getElementById('subtract').addEventListener('click', () => appendToDisplay('-'));
document.getElementById('plus').addEventListener('click', () => appendToDisplay('+'));
document.getElementById('point').addEventListener('click', () => appendToDisplay('.'));
document.getElementById('zero').addEventListener('click', () => appendToDisplay('0'));
document.getElementById('pl-min').addEventListener('click', () => appendToDisplay('- +'));
document.getElementById('enter').addEventListener('click', calculateResult);

