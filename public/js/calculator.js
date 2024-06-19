const btn = document.querySelectorAll('.button');
let currentLog = document.querySelector('#current-log');
const result = document.querySelector('#return-result');
let history = [];
let currentInput = "";
let operator = null;
let previousInput = "";

btn.forEach((button) => {
    button.addEventListener("click", function () {
        const value = this.getAttribute("data-value");
        
        if (value == "CE") {
            history = [];
            currentInput = "";
            previousInput = "";
            operator = null;
            result.textContent = "0";
            currentLog.textContent = "";
        } else if (value === "C") {
            currentInput = "";
            operator = null;
            previousInput = "";
            result.textContent = "0";
        } else if (value === "=") {
            if (operator && previousInput !== "" && currentInput !== "") {
                const equation = `${previousInput} ${operator} ${currentInput}`;
                currentInput = eval(equation);
                result.textContent = currentInput;
                currentLog.textContent += equation + " = " + currentInput + "\n";
                operator = null;
                previousInput = "";
            }
        } else if (["+", "-", "*", "/"].includes(value)) {
            if (currentInput !== "") {
                operator = value;
                previousInput = currentInput;
                currentInput = "";
            }
        } else {
            currentInput += value;
            result.textContent = currentInput;
        }
    })
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const equals = document.querySelector('.button[data-value="="]');
        equals.click();
    }

});