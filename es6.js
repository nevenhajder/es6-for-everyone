// A generator function yields a new value each time it's called
// until it has reached the final yield statement.
function* generatorExample() {
    yield '1';
    yield '2';
    yield '3';
}

const count = generatorExample();

// Calling .next() on a generator function returns
// an object with the properties 'done' and 'value'.
console.log(count.next());
console.log(count.next());
console.log(count.next());
console.log(count.next());
