const currentDisplay = document.querySelector('.current');
const numberButtons = document.querySelectorAll('.number');
const MAX = 10;


numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");
        currentDisplay.textContent += value;
    })
})


function operate(a, b, operand) {
    switch (operand) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '/':
            if (b === 0) throw new Error("Division by zero")
            return a / b;
        case '*':
            return a * b;

    }

}












