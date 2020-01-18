const calculatorResultScreen = document.getElementById('textarea');

addTest('Adding'
    , '8 + 2 ='
    , '10');

addTest('Subtracting'
    , '8 - 2 ='
    , '6');

addTest('Multiplying'
    , '8 * 2 ='
    , '16');

addTest('Dividing'
    , '8 / 2 ='
    , '4');

addTest('float'
    , '8 . 2 + 0 . 8 ='
    , '9');

addTest('clear-all'
    , '( 4 2 + 2 3 - 2 5 2 * ( 2 * 2 ) ) - 2 . 5 clear-all'
    , '');

addTest('clear-last'
    , '8 2 - 2 8 2 clear-last clear-last'
    , '82');

addTest('Sequence of Operations'
    , '1 + 2 * ( 3 + 4 ) / 2 - 1 ='
    , '7');

function addTest(title, buttonPressed, expectedResult) {
    let buttonArray = buttonPressed.split(' ');
    for (let i = 0; i < buttonArray.length; i++) {
        document.getElementById(buttonArray[i]).click();
    }
    if (calculatorResultScreen.value === expectedResult) {
        console.log('✔ ' + title + " test passed");
    } else {
        console.log('𝐗 ' + title + " test failed");
    }
    clearAllHandler();
}