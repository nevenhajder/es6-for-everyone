class Animal {
    constructor(name) {
        this.name = name;
        this.thirst = 100;
        this.belly = [];
    }

    drink() {
        this.thirst -= 10;
        return this.thirst;
    }

    eat(food) {
        this.belly.push(food);
        return this.belly;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        // The super() method calls the class that is being extended
        // then applies the sub-class on top of that
        super(name);
        // The breed property will only be on the Dog class
        this.breed = breed;
    }
}

const rhiney = new Animal('Rhiney');
const snickers = new Dog('Snickers', 'King Charles');
