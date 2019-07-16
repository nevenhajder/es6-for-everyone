function convertCurrency(amount) {
    const converted = {
        USD: amount * 0.76,
        GBP: amount * 0.53,
        AUD: amount * 1.01,
        MEX: amount * 13.30
    }

    return converted;
}

const {USD, GBP, AUD, MEX} = convertCurrency(100);
console.log(USD, GBP);
console.log('-----');

function tipCalc({ total, tip = 0.15, tax = 0.13 }) {
    return total + (total * tip) + (total * tax);
};

const bill = tipCalc({ total: 100 });
console.log(bill);