const multiplyByTen = function(value) {
    return 10 * value;
}

const result = multiplyByTen(20);
console.log(result);

const addition = (num1, num2) => {
    return num1 + num2;
}

const sum = addition(5, 3.5);
console.log(sum);

const teacher = {
    name: "Sadat",
    greet(person) {
        console.log(`${this.name} says hello to ${person}`)
    }
};

teacher.greet("Asib");