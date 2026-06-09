function getNumbers() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    return { num1, num2 };
}

// Reusable Functions
function add() {
    let { num1, num2 } = getNumbers();
    return num1 + num2;
}

function subtract() {
    let { num1, num2 } = getNumbers();
    return num1 - num2;
}

function multiply() {
    let { num1, num2 } = getNumbers();
    return num1 * num2;
}

function divide() {
    let { num1, num2 } = getNumbers();

    if (num2 === 0) {
        return "Cannot divide by zero";
    }

    return num1 / num2;
}

function square() {
    let num1 = parseFloat(document.getElementById("num1").value);
    return num1 * num1;
}

function cube() {
    let num1 = parseFloat(document.getElementById("num1").value);
    return num1 * num1 * num1;
}

function factorial() {
    let num1 = parseInt(document.getElementById("num1").value);

    if (num1 < 0) {
        return "Factorial not possible";
    }

    let fact = 1;

    for (let i = 1; i <= num1; i++) {
        fact *= i;
    }

    return fact;
}

function showResult(result) {
    document.getElementById("resultBox").innerHTML = "Result: " + result;
}