let screen = document.getElementById('textarea');
const REoperator = /^([+]|[-]|[*]|[/]|[exponentiation]|[roots])$/g;

function operatorHandler(target) {
    let inputArr = screen.value.split('');
    // console.log(inputArr);
    const lastValue = inputArr[inputArr.length - 1];

    if (screen.value === '' || lastValue.match(REoperator) !== null || lastValue[lastValue.length - 1] === '.') {
        return;
    } else {
        screen.value += ' ' + target.value + ' ';
    }
}

function bracketHandler(target) {
    let inputArr = screen.value.split('');
    const lastValue = inputArr[inputArr.length - 1];
    // console.log('lastValue: ' + lastValue);
    if (screen.value === '' || lastValue === ' ') {
        screen.value += target.value;
    } else {
        screen.value += ' ' + target.value;
    }
}

function expAndRootHandler(target) {
    let inputArr = screen.value.split('');
    const lastValue = inputArr[inputArr.length - 1];
    // console.log('lastValue: ' + lastValue);
    if (screen.value === '' || lastValue === ' ') {
        screen.value += target.value;
    } else {
        screen.value += ' ' + target.value + ' ';
    }
}

function numberHandler(target) {

    // console.log(tempArray);
    // tempArray.push(target.value);


    // console.log(lastValue);

    // screen.value += target.value;
    let inputArr = screen.value.split('');
    const lastValue = inputArr[inputArr.length - 1];
    // console.log('lastValue: ' + lastValue);

    if (lastValue === '(') {
        screen.value += ' ' + target.value;
    } else {
        screen.value += target.value;
    }

    // tempArray.push(target.value);

    // if (lastValue !== '+') {
    //     tempArray.push(target.value);
    // }
    // if (target.value !== tempArray[tempArray.length - 1]) {

    // }

    // tempArray.join(" ");
    // screen.value = tempArray.join("");

    // console.log(tempArray);
    // screen.value += target.value;
    // console.log(target.value);
}

function equalSignHandler(target) {
    // let equalSignArray = screen.value.split('');
    let equalSignArray = screen.value.split(' ');
    // let result = screen.value;
    // let result = screen.value;
    // eval(result);
    console.log(equalSignArray);

    screen.value = '';

    function getAllIndexes(arr, val) {
        var indexes = [], i;
        for (i = 0; i < arr.length; i++)
            if (arr[i] === val)
                indexes.push(i);
        return indexes;
    }
    for (let j = 0; j < equalSignArray.length; j++) {
        console.log(equalSignArray.indexOf('^'));
        if (equalSignArray.indexOf('^') !== -1) {
            let exponentiationPosition = Number(equalSignArray.indexOf('^'));
            // console.log(Math.pow(equalSignArray[Number(getAllIndexes(equalSignArray, '^')) - 1], equalSignArray[Number(getAllIndexes(equalSignArray, '^')) + 1]));
            equalSignArray[Number(equalSignArray.indexOf('^')) - 1] = Math.pow(equalSignArray[Number(equalSignArray.indexOf('^')) - 1], equalSignArray[Number(equalSignArray.indexOf('^')) + 1]);
            console.log(equalSignArray);
            equalSignArray.splice(exponentiationPosition, 2);
            console.log(equalSignArray);
        }
    }

    // let exponentiationPosition = Number(getAllIndexes(equalSignArray, '^'));
    // // console.log(Math.pow(equalSignArray[Number(getAllIndexes(equalSignArray, '^')) - 1], equalSignArray[Number(getAllIndexes(equalSignArray, '^')) + 1]));
    // equalSignArray[Number(getAllIndexes(equalSignArray, '^')) - 1] = Math.pow(equalSignArray[Number(getAllIndexes(equalSignArray, '^')) - 1], equalSignArray[Number(getAllIndexes(equalSignArray, '^')) + 1]);
    // console.log(equalSignArray);
    // equalSignArray.splice(exponentiationPosition, 2);
    // console.log(equalSignArray);

    // equalSignArray.splice(exponentiationPosition, 1);
    // console.log(equalSignArray);
    // if (equalSignArray.includes('*')) {
    //     // console.log(Number(equalSignArray[0]) * Number(equalSignArray[2]))
    //     screen.value = Number(equalSignArray[0]) * Number(equalSignArray[2])
    // }
    // let result = 1 + 2 * (3 + 4) / 2 - 1;
    // console.log('test: ' + eval(result))
    let result = equalSignArray.join(' ');
    console.log(screen.value);
    screen.value = eval(result);
    console.log(screen.value);
}

function clearAllHandler() {
    screen.value = '';
    equalSignArray = [];
    inputArr = [];
}

function clearLastHandler() {
    let textareaValue = screen.value;
    let newValue = textareaValue.slice(0, textareaValue.length - 1);
    screen.value = newValue;
}