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

function currencyHandler() {
    let currencyValue = document.getElementById("codeListSelect").value;
    screen.value += currencyValue + ' ';
}

let currencyCodeList = [];

// for (let i = 0; i < document.getElementById("codeListSelect").length; i++) {
//     currencyCodeList[i] = currencyValue[i];
//     currencyCodeList[i + 1] = currencyValue[i];
//     currencyCodeList[i + 2] = currencyValue[i];
// }

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
    // 

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



    // console.log(equalSignArray);

    // for (let i = 0; i < equalSignArray.length; i++) {
    //     if (equalSignArray[i].match(/[a-z]/i)) {
    //         // screen.value += target.value;
    //         // alert(JSON.stringify(convertCurrency(equalSignArray[i])));
    //         let returnedValue;
    //         let currencyReturnedCode = equalSignArray[i];
    //         // convertCurrency(currencyReturnedCode).then(result => {
    //         //     // equalSignArray[i] = result.mid;
    //         //     return returnedValue = result.mid
    //         // });
    // convertCurrency(currencyReturnedCode).then(data => returnedValue = data.mid)
    //     .then((returnedValue) => {
    //         equalSignArray[i] = returnedValue;
    //         equalSignArray[i + 1] = '*';
    //         console.log(equalSignArray);
    //     }).then((equalSignArray) => {
    //         let result = equalSignArray.join(' ');
    //         screen.value = eval(result);
    //     });
    //     }
    // }

    // equalSignArray[i] = convertCurrency(currencyReturnedCode).then(function (data) { data; });
    // equalSignArray[i] = convertCurrency(currencyReturnedCode).then(function (result) {
    // equalSignArray[i] = result.mid;
    // console.log(returnedValue);
    // setTimeout(() => {
    // do you stuf here
    // after the time you promise will be revolved or rejected
    // if you need some of the values in here immediately out of settimeout
    // might occur an error if promise wore not yet resolved or rejected
    // console.log("returnedValue ", returnedValue);
    //     equalSignArray[i] = returnedValue;
    //     equalSignArray[i + 1] = '*';
    //     console.log(equalSignArray);

    // }, 100);

    // return Promise.resolve(result.mid);
    // resolve(result.mid);

    //     Promise.resolve(true).then((result)=>return result);
    //     console.log(m);
    //     return Promise.all([result.mid]);
    // })

    for (let i = 0; i < equalSignArray.length; i++) {
        if (equalSignArray[i].match(/[a-z]/i)) {
            convertCurrency(equalSignArray[i]).then(data => returnedValue = data.mid)
                .then((returnedValue) => {
                    equalSignArray[i] = returnedValue + ' *';
                    return equalSignArray;
                }).then((equalSignArray) => {
                    console.log(equalSignArray);
                    let result = equalSignArray.join(' ');
                    screen.value = eval(result);
                });
        }
    }

    // console.log(equalSignArray);

    let result = equalSignArray.join(' ');
    screen.value = eval(result);

    // test = eval('7 7');
    // console.log(test);
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