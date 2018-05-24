const obj = {
    first_name: "Sadat",
    occupation: "Software Engineer",
    age: 24,
    isAlive: true
};

obj.age = 23;
console.log(obj.first_name);
obj.first_name = "Abu Sadat ";
console.log(obj.first_name);
delete obj.first_name;
//obj.first_name = undefined;
console.log(obj);
obj.last_name = "Md. Sayem";
obj["age"] = 25;
console.log(obj);