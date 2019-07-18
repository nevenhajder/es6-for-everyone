const first = 'snickers';
const last = 'bos';
const age = 2;
const breed = 'King Charles Cav';

const dog = {
    // No longer need this repetition
    first: first,
    // When the object property is the same as
    // a variable, it will automatically be set
    last,
    age,
    breed
};
console.log(dog);

const modal = {
    // This can be written more simply now
    create: function() {

    },
    // Shorthand for setting methods
    open() {

    },
    close() {

    }
}


// Computed Property Names
const key = 'pocketColor';
const value = '#ffc600';
const oppositeValue = '#0039ff';

const tShirt = {
    [key]: value,
    // Can compute property names
    [`${key}Opposite`]: oppositeValue
};
console.log(tShirt);


const keys = ['size', 'color', 'weight'];
const values = ['medium', 'red', 100];

const shirt = {
    [keys.shift()]: values.shift(),
    [keys.shift()]: values.shift(),
    [keys.shift()]: values.shift()
};

console.log(shirt);