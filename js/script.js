let formElement = document.querySelector(".js-form");
let amountPLN = document.querySelector(".js-amountPLN");
let currencyElement = document.querySelector(".js-currency")
let resultElement = document.querySelector(".js-result");

let EUR = 4.63;
let GBP = 5.37;
let USD = 4.34;
let CHF = 4.84;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let PLN = amountPLN.value;
    let currency = currencyElement.value;
    let result = resultElement.value;

    switch (currency) {
        case "EUR":
            result = PLN / EUR;
            break;
        case "GBP":
            result = PLN / GBP;
            break;
        case "USD":
            result = PLN / USD;
            break;
        case "CHF":
            result = PLN / CHF;
            break;
    }
    resultElement.innerText = `${result.toFixed(2)} ${currency}`;
});

