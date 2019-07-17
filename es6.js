const ages = [32, 15, 18, 19, 10];

// Checks if some items in the array meet the criteria
const adultPresent = ages.some(age => age >= 18);
console.log(adultPresent);

// Checks if all items in the array meet the criteria
const allOldEnough = ages.every(age => age >= 18);
console.log(allOldEnough);