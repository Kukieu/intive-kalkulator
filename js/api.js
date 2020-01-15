function convertCurrency(currencyCode) {
    return new Promise((resolve, reject) => {
        fetch(`http://api.nbp.pl/api/exchangerates/rates/A/${currencyCode}/`, {
            method: 'get',
            headers: {
                'Accept': 'application/json'
            },
            referrer: 'no-referrer'
        }).then(function (response) {
            if (response.ok) {
                return response.json();
            } else {
                return reject(response);
            }
        }).then(function (data) {
            resolve({ mid: data.rates[0].mid });
            console.log(data);
        }).catch(function (err) {
            reject(err);
        });
    })
}

var codeList = [];

let listCurrency = new Promise(function (resolve, reject) {
    fetch(`http://api.nbp.pl/api/exchangerates/tables/B/`, {
        method: 'get',
        headers: {
            'Accept': 'application/json'
        },
        referrer: 'no-referrer'
    }).then(res => res.json())
        .then(res => {
            resolve(res[0].rates);
        })
        .catch(function (error) {
            reject(error);
        });
});
let x = document.getElementById("codeListSelect");
listCurrency.then(
    // result => console.log(result[0].code),
    result => result.forEach(result => {
        // console.log(code.code);
        // codeList[count] = result;
        // codeList.push(result.code);
        var option = document.createElement("option");
        option.text = result.code;
        option.classList = 'code';
        x.add(option);
        // console.log(result);
        // console.log(codeList[count]);
        // console.log(codeList[count]);
        // console.log(codeList);
        // var myArr = JSON.parse(this.code);
    })
)
// console.log(x.length);
// var p = Promise.all([listCurrency]).then(function (values) {
//     console.log(values);
// });

// let x = document.getElementById("codeListSelect");
// var option = document.createElement("option");
// console.log(x);
// for (let i = 0; i < codeList.length; i++) {
//     // var car = new Option(codeList[i], i);
//     x.options.add(option, codeList[i]);
// }
// console.log(codeList);
// document.write(`<option value="${x}">${codeList[x]}</option>`);
// console.log(codeList);
// document.write(`</select>`);

// var x = document.getElementById("codeListSelect");

// for (let i = 0; i < 10; i++) {
//     var option = document.createElement("option");
//     option.text = codeList[i];
//     x.add(option);
// }
// let codeListString = JSON.parse(codeList);
// console.log(codeList);
// document.getElementById("demo").innerHTML = JSON.stringify(codeList);

                // console.log(x);
                // console.log(codeList);
                // document.write(`<option value="${x}">${codeList[x]}</option>`);
                            // console.log(codeList);
                            // document.write(`</select>`);
