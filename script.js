let firstNumber = 0;
let secondNumber = 0;
let operator;
let operationChosen = false;

const keys = document.querySelector('.calculator-keys');

keys.addEventListener('click', (event) => {
    const { target } = event;
    if (target.classList.contains('operator')) {
        // document.getElementById("textarea").value += target.value;
        firstNumber = document.getElementById("textarea").value;
        document.getElementById("textarea").value = "";
        operator = target.value;
        console.log(operator);
    }
    else if (target.classList.contains('number')) {
        document.getElementById("textarea").value += target.value;
    }
    else if (target.classList.contains('equal-sign')) {

        secondNumber = document.getElementById("textarea").value;

        switch (operator) {
            case '+':
                // result = Number(firstNumber) + Number(secondNumber);
                document.getElementById("textarea").value = Number(firstNumber) + Number(secondNumber);
                break;
            case '-':
                document.getElementById("textarea").value = Number(firstNumber) - Number(secondNumber);
                break;
            case '*':
                document.getElementById("textarea").value = Number(firstNumber) * Number(secondNumber);
                break;
            case '/':
                document.getElementById("textarea").value = Number(firstNumber) / Number(secondNumber);
                break;
            default:
                alert("I don't know such values");
        }
    }
    else if (target.classList.contains('clear-all')) {
        document.getElementById("textarea").value = " ";
    }
    else if (target.classList.contains('clear-last')) {
        let textareaValue = document.getElementById("textarea").value;
        let newValue = textareaValue.slice(0, textareaValue.length - 1);
        document.getElementById("textarea").value = newValue;
        // console.log(temp2);
    }
})