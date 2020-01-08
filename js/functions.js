let screen = document.getElementById('textarea');
const REoperator = /^([+]|[-]|[*]|[/]|[exponentiation]|[roots])$/g;

function operatorHandler(target) {
    let inputArr = screen.value.split('');
    console.log(inputArr);
    const lastValue = inputArr[inputArr.length - 1];

    if (screen.value === '' || lastValue.match(REoperator) !== null || lastValue[lastValue.length - 1] === '.') {
        return;
    } else {
        screen.value += ' ' + target.value + ' ';
    }
}

function bracketHandler(target) {
    screen.value += ' ' + target.value;
}

function expAndRootHandler(target) {
    if (target.value === 'sqrt(' || target.value === 'pow(') {
        // screen.value = '';
        screen = target.value + screen.value + ')';
    }
}

function numberHandler(target) {

    // console.log(tempArray);
    // tempArray.push(target.value);


    // console.log(lastValue);

    // screen.value += target.value;

    screen.value += target.value;

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
    let equalSignArray = screen.value.split(' ');
    screen.value = '';

    if (equalSignArray[0] === target.classList.contains('number') && equalSignArray[1] === target.classList.contains('number')) {
        equalSignArray.join('');
    }

    console.log(equalSignArray.indexOf('('));

    console.log(equalSignArray);
    if (equalSignArray.includes('*')) {
        console.log(Number(equalSignArray[0]) * Number(equalSignArray[2]))
    }

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