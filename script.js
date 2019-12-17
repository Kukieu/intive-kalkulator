const keys = document.querySelector('.calculator-keys');

keys.addEventListener('click', (event) => {
    const { target } = event;
    if (target.classList.contains('operator')) {
        document.getElementById("textarea").value = target.value;
    }
})