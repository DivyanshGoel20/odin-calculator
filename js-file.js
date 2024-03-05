// Addition function
function add(a, b) {
    return a + b;
}

// Subtraction function
function subtract(a, b) {
    return a - b;
}

// Multiplication function
function multiply(a,b) {
    return a * b;
}

// Division function
function divide(a,b) {
    if (b==0) {
        return "Error";
    } 
    else {
        ans = a / b;
        return parseFloat(ans.toFixed(2))
    }
}

// Function to call other math functions
function operate(number1, operator, number2) {
    if (operator == '+') {
        return add(number1,number2)
    }
    else if (operator == '-') {
        return subtract(number1, number2)
    }
    else if (operator == '*') {
        return multiply(number1, number2)
    }
    else {
        return divide(number1,number2)
    }
}

// Function giving the result value
function resultValue() {
    firstNumber = Number(number_1.join(''));
    secondNumber = Number(number_2.join(''));
    if (storedValue) {
        value = operate(storedValue, operator, secondNumber);
    }
    else {
        value = operate(firstNumber, operator, secondNumber);
    }
    storedValue = Number(value);
    operatorClicked = !operatorClicked
    number_2 = [];
    valueNode = document.createTextNode(value);
    displayScreen.textContent = '';
    displayScreen.appendChild(valueNode)
}

// Function to reset values
function reset_values() {
    number_1 = [];
    number_2 = [];
    firstNumber = "";
    secondNumber = "";
    operator = "";
    storedValue = "";
}

// Creating a container
const container = document.querySelector('.container');
container.style.justifyContent = 'center';
container.style.width = '400px';
container.style.height = '470px';
container.style.margin = 'auto';
container.style.border = '1px solid black';
container.style.marginTop = '50px'

// Creating the calculator screen
const displayScreen = document.querySelector('.screen');

// Creating buttons of calculators
const calc_buttons = document.querySelector('.calc-buttons');
calc_buttons.display = 'flex';

// DE=signing the calculator buttons
const buttons = document.querySelectorAll('.calc-buttons button');
buttons.forEach(button => {
    button.style.width = '97px';
    button.style.height = '87px';
    button.style.boxSizing = 'border-button';
});

// Empty screen value
let number_1 = [];
let firstNumber;
let operator;
let number_2 = [];
let secondNumber;
let storedValue = "";
let operatorClicked = false;
result_flag = false;

// Working of the calculator
calc_buttons.addEventListener('click', function(event){
    if (event.target.tagName === 'BUTTON') {
        let value = event.target.value;

        // Checks if the value of the button is an integer
        if (!isNaN(parseInt(value))) {
            if (result_flag) {
                displayScreen.textContent = '';
                reset_values();
                result_flag = false;
            }
            if (operatorClicked) {
                number_2.push(value)
            } else {
                number_1.push(value);
            }
            valueNode = document.createTextNode(value);
            displayScreen.appendChild(valueNode);
        }
        // Checks if the value of the button is an operator
        else if (['+', '-', '*', '/'].includes(value)) {
            if (operatorClicked) {
                resultValue()
            }
            operatorClicked = !operatorClicked
            operator = value;
            valueNode = document.createTextNode(value);
            displayScreen.appendChild(valueNode);
        }
        // Checks if the value of the button is to clear everything
        else if (value == 'C') {
            reset_values();
            displayScreen.textContent = '';
        }
        // Checks if the value of the button is to display the result
        else {
            resultValue()
            result_flag = true;
        }
    }
})

container.appendChild(displayScreen);
container.appendChild(calc_buttons);
