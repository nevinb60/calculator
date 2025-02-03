const currentDisplay = document.querySelector('.current');
const historyDisplay = document.querySelector('.history');
const MAX_LENGTH = 10;



function appendToDisplay(input) {
    currentDisplay.value += input


}

function evaluateOperation() {
    historyDisplay.textContent = `${currentDisplay.value} =`
    currentDisplay.textContent = eval(currentDisplay.value)


}



function clearDisplay() {
    currentDisplay.value = "";
};

function remove() {
    currentDisplay.value = currentDisplay.value.slice(0, -1);
}
















