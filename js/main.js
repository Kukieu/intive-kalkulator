const keys = document.querySelector('.calculator-keys');
const production = 1;

if (production === 0) {
    include('js/automaticTests.js', 'text/javascript');
}

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
    else if (target.classList.contains('dropdown')) {
        currencyHandler(target);
    }
})

function include(filename, type) {
    var head = document.getElementsByTagName('head')[0];

    var script = document.createElement('script');
    script.src = filename;
    script.type = type;

    head.appendChild(script)
}