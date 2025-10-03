// Declaration of functions

// add function
function add(number1, number2) {
    return number1 + number2;
}

// subtract function
function subtract(number1, number2) {
    return number1 - number2;
}

// multiply function
function multiply(number1, number2) {
    return number1 * number2;
}

// divide function
function divide(number1, number2) {
    if (number === 0) {
        return 'Error: Division by Zero is not possible';
    }
    return number1 / number2;
}

// function to get inputs safely
function getNumbers(){
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    return { number1, number2 };
}

// adding event listeners
document.getElementById('add').addEventListener('click', function() {
    const { number1, number2 } = getNumbers();
    document.getElementById('calculation-result').textContent = add(number1, number2);
});

document.getElementById('subtract').addEventListener('click', function() {
    const{ number1, number2 } = getNumbers();
    document.getElementById('calculation-result').textContent = subtract(number1, number2);
});

document.getElementById('divide').addEventListener('click', function() {
    const{ number1, number2 } = getNumbers();
    document.getElementById('calculation-result').textContent = divide(number1, number2);
});

document.getElementById('multiply').addEventListener('click', function() {
    const{ number1, number2 } = getNumbers();
    document.getElementById('calculation-result').textContent = multiply(number1, number2);
});