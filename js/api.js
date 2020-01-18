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
        }).then(function (result) {
            return result;
        })
            .catch(function (err) {
                reject(err);
            });
    })
}

var codeList = [];

let listCurrency = new Promise(function (resolve, reject) {
    fetch(`http://api.nbp.pl/api/exchangerates/tables/A/`, {
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
listCurrency.then(result => result.forEach(result => {
    var option = document.createElement("option");
    option.text = result.code;
    option.classList = 'code';
    x.add(option);
})
)
