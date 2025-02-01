const currentDisplay = document.querySelector('.current');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const historyDisplay = document.querySelector('.history');
const MAX_LENGTH = 10;

let current_value = [];
let history_value = [];
let operator = '';

function updateCurrentDisplay() {
    numberButtons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.getAttribute("data-value");
            if (current_value.length < MAX_LENGTH) {
                current_value.push(value);
                currentDisplay.textContent = current_value.join("");
            }



        })
    })

}

updateCurrentDisplay();

function updateHistoryDisplay() {
    operatorButtons.forEach(button => {
        button.addEventListener("click", () => {
            const operand = button.getAttribute("data-value");
            operator = operand;
            history_value = current_value.join("");
            historyDisplay.textContent = history_value;
            current_value = [];

        })
    })
}

updateHistoryDisplay();



function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b !== 0) {
        return a / b;
    }
    else {
        console.error("Div by zero");

    }
}


function operate(a, b, operand) {
    switch (operand) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '/':
            return divide(a, b);
        case '*':
            return multiply(a, b);

    }

}












