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
            console.log('Request failed', error)
        });
});

let codeList = [];
let count = 0;

// resolve runs the first function in .then
listCurrency.then(
    // result => console.log(result[0].code),
    result => result.forEach(code => {
        console.log(code.code);
        codeList[count] = code.code;
        count++;
        // console.log(count);
    }),
    error => console.log(error)
).then(codeList => { console.log(codeList) })
