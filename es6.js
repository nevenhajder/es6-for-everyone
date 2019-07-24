// Example simulating API calls
const weather = new Promise((resolve) => {
    setTimeout(() => {
        resolve({ temp: 29, weather: 'Sunny with clouds' });
    }, 2000);
});

const tweets = new Promise((resolve) => {
    setTimeout(() => {
        resolve(['I like cake.', 'BBQ is good!']);
    }, 500);
});

Promise
    .all([weather, tweets])
    .then((responses) => {
        const [weatherInfo, tweetInfo] = responses;
        // console.log(weatherInfo, tweetInfo);
    });


// Example with API calls
const postsPromise = fetch('http://wesbos.com/wp-json/wp/v2/posts');
const streetCarsPromise = fetch('http://data.ratp.fr/api/datasets/1.0/search/?q=paris');

Promise
    .all([postsPromise, streetCarsPromise])
    .then((responses) => {
        // At this point responses are a readable stream that needs to be converted to JSON
        return Promise.all(responses.map(response => response.json()));
    })
    .then(responses => console.log(responses));
