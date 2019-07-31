const dogs = new Map();

dogs.set('Snickers', 3);
dogs.set('Sunny', 2);
dogs.set('Hugo', 10);

dogs.forEach((val, key) => console.log(val, key));

for (const [val, key] of dogs) {
    console.log(val, key);
}

// Maps allow you to set anything(!) as the key in the key-value pairing
const buttonMap = new Map();
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    // Set each button to be the key in the map
    buttonMap.set(button, 0);
    button.addEventListener('click', function () {
        // Get current click count from the map for this button
        const val = buttonMap.get(this);
        buttonMap.set(this, val + 1);
        console.log(buttonMap);
    });
});


// ----------------------------------------------------------------------------

// Map vs Weak Map
let dog1 = { name: 'Snickers' };
let dog2 = { name: 'Sunny' };

const strong = new Map();
const weak = new WeakMap();

strong.set(dog1, 'Snickers is the best!');
weak.set(dog2, 'Sunny is second best!');

console.log(strong);
console.log(weak);
dog1 = null;
dog2 = null;
// In a weak map the reference to dog2 will get garbage collected
// since the object has been set to null, but the regular map retains the reference.
console.log(strong);
console.log(weak);
