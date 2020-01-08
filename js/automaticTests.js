// for (let i = 0; i < 10; i++) {
//     document.getElementById(i).click();
//     if (document.getElementById('textarea').value === String(i)) {
//         console.log('✔ button ' + i + " test passed");
//     } else {
//         console.log('𝐗 button ' + i + " test failed");
//     }
//     textareaReset();
// }

// textareaReset();

// document.getElementById(6).click();
// document.getElementById("*").click();
// document.getElementById(8).click();
// document.getElementById("=").click();
// if (document.getElementById('textarea').value === '48') {
//     console.log("✔ 'multiply' test passed");
// } else {
//     console.log("𝐗 'multiply' test failed");
// }

// textareaReset();

// document.getElementById(8).click();
// document.getElementById("/").click();
// document.getElementById(2).click();
// document.getElementById("=").click();
// if (document.getElementById('textarea').value === '4') {
//     console.log("✔ 'divide' test passed");
// } else {
//     console.log("𝐗 'divide' test failed");
// }

// textareaReset();

// document.getElementById(8).click();
// document.getElementById("+").click();
// document.getElementById(2).click();
// document.getElementById("=").click();
// if (document.getElementById('textarea').value === '10') {
//     console.log("✔ '+' test passed");
// } else {
//     console.log("𝐗 '+' test failed");
// }

// textareaReset();

// document.getElementById(8).click();
// document.getElementById("-").click();
// document.getElementById(2).click();
// document.getElementById("=").click();
// if (document.getElementById('textarea').value === '6') {
//     console.log("✔ '-' test passed");
// } else {
//     console.log("𝐗 '-' test failed");
// }

// textareaReset();

// document.getElementById(8).click();
// document.getElementById(".").click();
// document.getElementById(2).click();
// document.getElementById("+").click();
// document.getElementById(0).click();
// document.getElementById(".").click();
// document.getElementById(8).click();
// document.getElementById("=").click();
// if (document.getElementById('textarea').value === '9') {
//     console.log("✔ 'float' test passed");
// } else {
//     console.log("𝐗 'float' test failed");
// }

// textareaReset();

// document.getElementById(8).click();
// document.getElementById(2).click();
// document.getElementById("clear-all").click();
// if (document.getElementById('textarea').value === '') {
//     console.log("✔ 'clear-all' test passed");
// } else {
//     console.log("𝐗 'clear-all' test failed");
// }

// textareaReset();

// document.getElementById(8).click();
// document.getElementById(2).click();
// document.getElementById("clear-last").click();
// if (document.getElementById('textarea').value === '8') {
//     console.log("✔ 'clear-last' test passed");
// } else {
//     console.log("𝐗 'clear-last' test failed");
// }

// textareaReset();

// document.getElementById(2).click();
// document.getElementById("+").click();
// document.getElementById(2).click();
// document.getElementById("*").click();
// document.getElementById(2).click();
// document.getElementById("=").click();
// if (document.getElementById('textarea').value === '6') {
//     console.log("✔ 'Sequence of Operations' test passed");
// } else {
//     console.log("𝐗 'Sequence of Operations' test failed");
// }

// textareaReset();

// document.getElementById('(').click();
// document.getElementById('(').click();
// document.getElementById('(').click();
// document.getElementById('(').click();
// document.getElementById("=").click();

// textareaReset();

document.getElementById(1).click();
document.getElementById("+").click();
document.getElementById(2).click();
document.getElementById("*").click();
document.getElementById('(').click();
document.getElementById('3').click();
document.getElementById('+').click();
document.getElementById('4').click();
document.getElementById(')').click();
document.getElementById('/').click();
document.getElementById(2).click();
document.getElementById('-').click();
document.getElementById(1).click();
document.getElementById("=").click();
if (document.getElementById('textarea').value === '7') {
    console.log("✔ 'Sequence of Operations' test passed");
} else {
    console.log("𝐗 'Sequence of Operations' test failed");
}

textareaReset();

function textareaReset() {
    document.getElementById('textarea').value = '';
}