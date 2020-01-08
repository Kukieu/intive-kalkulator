const keys = document.querySelector('.calculator-keys');

keys.addEventListener('click', (event) => {
    const { target } = event;
    if (target.classList.contains('operator')) {
        operatorHandler(target);
    }
    else if (target.classList.contains('number')) {
        numberHandler(target);
    }
    else if (target.classList.contains('equal-sign')) {
        equalSignHandler();
    }
    else if (target.classList.contains('clear-all')) {
        clearAllHandler();
    }
    else if (target.classList.contains('clear-last')) {
        clearLastHandler();
    }
})