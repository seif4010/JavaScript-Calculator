let num1 = "";
let num2 = "";
let result = "";
let operator = "";

// Calculate Function
function calculate() {
    num2 = document.getElementById('display').innerText;
    switch (operator) {
        case "+":
            result = String(Number(num1) + Number(num2));
            break;
        case "-":
            result = String(Number(num1) - Number(num2));
            break;
        case "*":
            result = String(Number(num1) * Number(num2));
            break;
        case "/":
            if (Number(num2) !== 0) {
                result = String(Number(num1) / Number(num2));
            } else {
                result = 'Error parsing';
            }
            break;
        default:
            break;
    }
    document.getElementById('display').innerHTML = result;
    num1 = result;
    num2 = '';
    operator = '';
    result = '';
}

// Display the result
function display() {
    const displayResult = document.getElementById("display").innerText;
    document.getElementById("display").innerText = displayResult.slice(0, -1) || '0';
}

// Setting the operator function
function setOperator(op) {
    num1 = document.getElementById("display").innerText;
    operator = op;
    document.getElementById("display").innerText = '0';
}

// Clear function
function clearDisplay() {
    document.getElementById("display").innerText = '0';
    num1 = '';
    num2 = '';
    result = '';
    operator = '';
}

// Appending a number
function appendNumber(number) {
    const displayResult = document.getElementById('display').innerText;
    document.getElementById('display').innerText = (displayResult === '0' ? '' : displayResult) + number;
}

// Event listeners for button clicks
document.getElementById('add').addEventListener('click', function () {
    setOperator('+');
});
document.getElementById('minus').addEventListener('click', function () {
    setOperator('-');
});
document.getElementById('multiply').addEventListener('click', function () {
    setOperator('*');
});
document.getElementById('divide').addEventListener('click', function () {
    setOperator('/');
});
document.getElementById('clear').addEventListener('click', function () {
    clearDisplay();
});

// Number button event listeners
const numberButtons = document.querySelectorAll('.btn');
numberButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        const number = button.getAttribute('data-number');
        appendNumber(number);
    });
});

// Calculate event listener for getting the total result
document.getElementById('calcResult').addEventListener('click', function () {
    calculate();
});