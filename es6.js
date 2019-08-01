// Basic Promise
// fetch('https://.github.com/users/wesbos')
//     .then(res => res.json()).then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.error(err);
//     });


// Chainining promises
function breathe(amount) {
    return new Promise((resolve, reject) => {
        if (amount < 500) {
            reject('That is too small a value!');
        }

        // Resolve promise after a delay
        setTimeout(() => {
            resolve(`Done for ${amount} ms`);
        }, amount);
    });
}

breathe(1000)
    .then((res) => {
        console.log(res);
        return breathe(2000);
    })
    .then((res) => {
        console.log(res);
        return breathe(400);
    })
    .catch((err) => {
        console.error(err);
    });
