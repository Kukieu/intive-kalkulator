let firstNumber = 0;
let secondNumber = 0;

const keys = document.querySelector('.calculator-keys');

keys.addEventListener('click', (event) => {
    const { target } = event;
    if (target.classList.contains('operator')) {
        document.getElementById("textarea").value += target.value;
    }
    else if (target.classList.contains('number')) {
        document.getElementById("textarea").value += target.value;
    }
})