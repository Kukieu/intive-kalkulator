let screen = document.getElementById('textarea');
let screenHistory = document.getElementById('textarea-history');
const REoperator = /^([+]|[-]|[*]|[/]|[power]|[roots])$/g;

function operatorHandler(target) {
    let inputArr = screen.value.split('');

    const lastValue = inputArr[inputArr.length - 1];

    if (screen.value === '' && target.value === '-') {
        screen.value += target.value;
    }

    if (screen.value === '' || lastValue.match(REoperator) !== null || lastValue[lastValue.length - 1] === '.') {
        return;
    } else {
        screen.value += ' ' + target.value + ' ';
    }
}

function bracketHandler(target) {
    let inputArr = screen.value.split('');
    const lastValue = inputArr[inputArr.length - 1];

    if (screen.value === '' || lastValue === ' ') {
        screen.value += target.value;
    } else {
        screen.value += ' ' + target.value;
    }
}


function numberHandler(target) {
    let inputArr = screen.value.split('');
    const lastValue = inputArr[inputArr.length - 1];

    if (lastValue === '-') {
        screen.value += target.value;
        return;
    }

    if (target.value === '.' && lastValue === '.') {
        return;
    }

    if (lastValue === '(') {
        screen.value += ' ' + target.value;
    } else {
        screen.value += target.value;
    }
}


function equalSignHandler(target) {
    let operationHistory = screen.value;

    screenHistory.value = '';
    screenHistory.value = operationHistory;

    let equalSignArray = screen.value.split(' ');

    screen.value = '';

    let result = equalSignArray.join(' ');
    screen.value = eval(result);
}

function clearAllHandler() {
    screen.value = '';
    screenHistory.value = '';
    equalSignArray = [];
    inputArr = [];
}

function clearLastHandler() {
    let screenArray = screen.value.split(' ');
    screenArray.pop();
    screen.value = screenArray.join(' ');
}