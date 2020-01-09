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
        equalSignHandler(target);
    }
    else if (target.classList.contains('clear-all')) {
        clearAllHandler();
    }
    else if (target.classList.contains('clear-last')) {
        clearLastHandler();
    }
    else if (target.classList.contains('bracket')) {
        bracketHandler(target);
    }
    else if (target.classList.contains('pow-and-root')) {
        powAndRootHandler(target);
    }
})