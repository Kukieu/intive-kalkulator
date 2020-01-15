let screen = document.getElementById('textarea');
let screenHistory = document.getElementById('textarea-history');
const REoperator = /^([+]|[-]|[*]|[/]|[power]|[roots])$/g;

function operatorHandler(target) {
    let inputArr = screen.value.split('');

    const lastValue = inputArr[inputArr.length - 1];

    if (screen.value === '' && target.value === '-') {
        screen.value += target.value;
    }

    // if (lastValue[lastValue.length] === target.value) {
    //     return;
    // }

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
    // console.log(inputArr);

    if (lastValue === '-') {
        // console.log(lastValue - 1);
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

function currencyHandler(target) {
    // screen.value += target.value;
    let currencyValue = document.getElementById("codeListSelect").value;
    console.log(currencyValue);
}

function equalSignHandler(target) {
    // let equalSignArray = screen.value.split('');
    let operationHistory = screen.value;

    // convertCurrency('EUR').then(({ mid }) => {
    //     screen.value += mid
    // })

    screenHistory.value = '';
    screenHistory.value = operationHistory;

    let equalSignArray = screen.value.split(' ');

    // console.log(equalSignArray);

    screen.value = '';

    // function getAllIndexes(arr, val) {
    //     var indexes = [], i;
    //     for (i = 0; i < arr.length; i++)
    //         if (arr[i] === val)
    //             indexes.push(i);
    //     return indexes;
    // }
    for (let j = 0; j < equalSignArray.length; j++) {
        if (equalSignArray.indexOf('^') !== -1) {
            let powerPosition = Number(equalSignArray.indexOf('^'));
            // console.log(Math.pow(equalSignArray[Number(getAllIndexes(equalSignArray, '^')) - 1], equalSignArray[Number(getAllIndexes(equalSignArray, '^')) + 1]));
            equalSignArray[Number(equalSignArray.indexOf('^')) - 1] = Math.pow(equalSignArray[Number(equalSignArray.indexOf('^')) - 1], equalSignArray[Number(equalSignArray.indexOf('^')) + 1]);
            // console.log(equalSignArray);
            equalSignArray.splice(powerPosition, 2);
            // console.log(equalSignArray);
        }
        if (equalSignArray.indexOf('√') !== -1) {
            let rootsPosition = Number(equalSignArray.indexOf('√'));
            if (equalSignArray[rootsPosition + 1] < 0) {
                screen.value = 'Incorrect operation';
                return;
            } else {
                // console.log(Math.pow(equalSignArray[Number(getAllIndexes(equalSignArray, '^')) - 1], equalSignArray[Number(getAllIndexes(equalSignArray, '^')) + 1]));
                equalSignArray[Number(equalSignArray.indexOf('√')) - 1] = Math.pow(equalSignArray[Number(equalSignArray.indexOf('√')) + 1], 1 / equalSignArray[Number(equalSignArray.indexOf('√')) - 1]);
                // console.log(equalSignArray);
                equalSignArray.splice(rootsPosition, 2);
                // console.log(equalSignArray);
            }
        }
    }

    // let powerPosition = Number(getAllIndexes(equalSignArray, '^'));
    // // console.log(Math.pow(equalSignArray[Number(getAllIndexes(equalSignArray, '^')) - 1], equalSignArray[Number(getAllIndexes(equalSignArray, '^')) + 1]));
    // equalSignArray[Number(getAllIndexes(equalSignArray, '^')) - 1] = Math.pow(equalSignArray[Number(getAllIndexes(equalSignArray, '^')) - 1], equalSignArray[Number(getAllIndexes(equalSignArray, '^')) + 1]);
    // console.log(equalSignArray);
    // equalSignArray.splice(powerPosition, 2);
    // console.log(equalSignArray);

    // let test = -1 + 2 * (3 + 4) / 2 - 1;
    // let test = '- 1 + - 1';
    // console.log('test: ' + eval(test))
    let result = equalSignArray.join(' ');
    // console.log(screen.value);
    screen.value = eval(result);
    // console.log(screen.value);
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
    // console.log(equalSignArray);
    screen.value = screenArray.join(' ');
}

// let dropdown = document.getElementById("codeListSelect");
// sortSelectOptions(dropdown);
// console.log(dropdown.options[2]);

// function sortSelectOptions(selectElement) {
//     var options = $(selectElement + " options");

//     options.sort(function (a, b) {
//         if (a.text.toUpperCase() > b.text.toUpperCase()) return 1;
//         else if (a.text.toUpperCase() < b.text.toUpperCase()) return -1;
//         else return 0;
//     });

//     $(selectElement).empty().append(options);
// }