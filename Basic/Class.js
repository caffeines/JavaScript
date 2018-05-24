class Animal {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    speak() {
        console.log(`${this.name} makes a noise !`);
    }
    getWeight() {
        return this.weight;
    }
    getName() {
        return this.name;
    }
}

const animal = new Animal("kutta", 16);
animal.speak();

const animal2 = new Animal("bilai", 2.6);
console.log(`${animal2.getName()}'s weight is: ${animal2.getWeight()}`);