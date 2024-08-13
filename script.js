// script.js
const display = document.getElementById('display');
let currentInput = '';
let result = '';
let operator = '';

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        
        if (value === 'C') {
            currentInput = '';
            result = '';
            operator = '';
            display.textContent = '0';
        } else if (value === '=') {
            if (operator && currentInput) {
                result = eval(result + operator + currentInput);
                display.textContent = result;
                currentInput = result;
                operator = '';
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (currentInput) {
                operator = value;
                result = currentInput;
                currentInput = '';
            }
        } else {
            currentInput += value;
            display.textContent = currentInput;
        }
    });
});
