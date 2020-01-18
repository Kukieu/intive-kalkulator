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

function powAndRootHandler(target) {
    let inputArr = screen.value.split('');
    const lastValue = inputArr[inputArr.length - 1];

    if (screen.value === '' || lastValue === ' ') {
        screen.value += target.value;
    } else {
        screen.value += ' ' + target.value + ' ';
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

    for (let j = 0; j < equalSignArray.length; j++) {
        if (equalSignArray.indexOf('^') !== -1) {
            let powerPosition = Number(equalSignArray.indexOf('^'));
            equalSignArray[Number(equalSignArray.indexOf('^')) - 1] = Math.pow(equalSignArray[Number(equalSignArray.indexOf('^')) - 1], equalSignArray[Number(equalSignArray.indexOf('^')) + 1]);
            equalSignArray.splice(powerPosition, 2);
        }
        if (equalSignArray.indexOf('√') !== -1) {
            let rootsPosition = Number(equalSignArray.indexOf('√'));
            if (equalSignArray[rootsPosition + 1] < 0) {
                screen.value = 'Incorrect operation';
                return;
            } else {
                equalSignArray[Number(equalSignArray.indexOf('√')) - 1] = Math.pow(equalSignArray[Number(equalSignArray.indexOf('√')) + 1], 1 / equalSignArray[Number(equalSignArray.indexOf('√')) - 1]);
                equalSignArray.splice(rootsPosition, 2);
            }
        }
    }

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