const arrays = ["Sadat", 23, "Software Engineer", "google", true, { key: 642 }];
console.log(arrays);
arrays.push("JavaScript");
console.log(arrays);
const lastValue = arrays.pop();
console.log(arrays);
console.log("Index of  Software Engineer : " + arrays.indexOf("Software Engineer"));

console.log(`Last value by pop is ${lastValue}\n`);


console.log("From arrays by for loop : ");
for (let i = 0; i < arrays.length; i++) {
    console.log(arrays[i]);
}

console.log("\nFrom arrays by for each : ");

arrays.forEach(item => {
    console.log(item);
});

console.log("\nwhile loop: ");
let count = 1;
while (count < 10) {
    console.log(`Count: ${count}`);
    count++;
}

console.log("\ndo-while loop: ");
var it = 1;
do {
    console.log(`Iterator : ${it}`);
    it++;
} while (it < 10);


const obj = {
    first_name: "Sadat",
    occupation: "Software Engineer",
    age: 24,
    isAlive: true
};

console.log("\nFrom object by for loop : ");
for (let key in obj) {
    console.log(obj[key]);
}


const str = "I am Sadat from NSU";
const splitString = str.split(``);
const newString = splitString.join(``);

console.log(newString);

splitString.forEach(item => {
    console.log(item);
});