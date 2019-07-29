class Dog {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }

    bark() {
        console.log(`Bark! Bark! My name is ${this.name}`);
    }

    cuddle() {
        console.log('I love you owner!');
    }

    set nicknames(name) {
        this.nick = name.trim();
    }

    get nicknames() {
        return this.nick;
    }
}

const Snickers = new Dog('Snickers', 'King Charles');
console.log(Snickers);
