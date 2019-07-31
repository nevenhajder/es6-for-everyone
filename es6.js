const brunch = new Set();

brunch.add('Wes');
brunch.add('Sarah');
brunch.add('Simone');

const line = brunch.values();
// console.log(line.next().value);
// console.log(line.next().value);

// You can iterate over sets
// but not over weak sets
for (const person of brunch) {
    console.log(person);
}

brunch.add('Snickers');
brunch.add('Heather');

// ----------------------------------------------------------------------------

// Weak sets (weakly held sets) can only contain objects
const dog1 = { name: 'Snickers', age: 3 };
let dog2 = { name: 'Sunny', age: 1 };

const weakness = new WeakSet([dog1, dog2]);

console.log(weakness);
dog2 = null;
console.log(weakness);
// At some point between the console.log right above and this timeout log
// the reference to dog2 is garbage collected from the weak set
// since dog2 has been manually set to null. This is what is meant by "weakly held sets"
setTimeout(() => console.log(weakness), 4000);
