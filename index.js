const currentDisplay = document.querySelector('.current');
const historyDisplay = document.querySelector('.history');
const MAX_LENGTH = 9;



function appendToDisplay(input) {
    if (currentDisplay.value.length <= MAX_LENGTH) {
        currentDisplay.value += input

    }
};

function evaluateOperation() {
    historyDisplay.textContent = `${currentDisplay.value} =`
    currentDisplay.textContent = eval(currentDisplay.value)

};


function clearDisplay() {
    historyDisplay.textContent = `Ans = ${currentDisplay.value}`
    currentDisplay.value = "";

};

function remove() {
    currentDisplay.value = currentDisplay.value.slice(0, -1);
};
















