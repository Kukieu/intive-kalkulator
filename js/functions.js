let firstNumber = 0;
let secondNumber = 0;
let operator;
let operationChosen = false;

function operatorHandler(target) {
    operationChosen = true;
    firstNumber = document.getElementById('textarea').value;
    operator = target.value;
}

function numberHandler(target) {
    if (operationChosen === false) {
        document.getElementById('textarea').value += target.value;
    } else {
        operationChosen = false;
        document.getElementById('textarea').value = '';
        document.getElementById('textarea').value += target.value;
    }
}

function equalSignHandler() {
    secondNumber = document.getElementById('textarea').value;

    switch (operator) {
        case '+':
            document.getElementById('textarea').value = Number(firstNumber) + Number(secondNumber);
            break;
        case '-':
            document.getElementById('textarea').value = Number(firstNumber) - Number(secondNumber);
            break;
        case '*':
            document.getElementById('textarea').value = Number(firstNumber) * Number(secondNumber);
            break;
        case '/':
            document.getElementById('textarea').value = Number(firstNumber) / Number(secondNumber);
            break;
        default:
            alert('ERROR - something went wrong');
    }
}

function clearAllHandler() {
    document.getElementById('textarea').value = '';
}

function clearLastHandler() {
    let textareaValue = document.getElementById('textarea').value;
    let newValue = textareaValue.slice(0, textareaValue.length - 1);
    document.getElementById('textarea').value = newValue;
}