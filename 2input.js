function calculateAddition() {
    let firstNumber = parseFloat(document.querySelector('input[name="number1"]').value);
    let secondNumber = parseFloat(document.querySelector('input[name="number2"]').value);

    return firstNumber + secondNumber;
    
}

function showResult(result) {
    document.querySelector('#result > span').innerHTML = result;
}

function calculateResult() {
    let result = calculateAddition();
    showResult(result);
}


document.querySelectorAll('input').forEach((element) => {
    element.addEventListener('change', calculateResult);
});