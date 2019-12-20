let firstNumber = 0;
let secondNumber = 0;
let result = 0;
let operator;

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

        switch (operator) {
            case '+':
                alert('+');
                break;
            case '-':
                alert('-');
                break;
            case '*':
                alert('*');
                break;
            case '/':
                alert('/');
                break;
            default:
                alert("I don't know such values");
        }

        secondNumber = document.getElementById("textarea").value;
        // console.log(firstNumber);
        result = Number(firstNumber) + Number(secondNumber);
        console.log("TCL: result", result)
        String(result);
        document.getElementById("textarea").value = result;
    }
})