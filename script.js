console.log("Hello world");
const names = "john";
const aged = 30;
const rating = 4.5;
const isCool = true
arrayOne = ["john",30,true,null,undefined]
console.log(arrayOne);
console.log("Function");

function showSting() {
    console.log("Hello World");
}

showSting();

var showString = function () {
    console.log("Hello World");
}

showSting();


var showSting = () => {
    console.log(" Arrow Function Hello World");
}

showSting();


// Map

var number = [1, 2, 3, 4, 5];


var square = number.map((num) => {
    return num * num;
})

console.log(square);

var fruits = ["Apple", "Banana", "Mango"];

var upperCase = fruits.map((fruit) => {
    return fruit.toUpperCase();
});

console.log(upperCase);

// Enhanced Object Literals

var name = "John";
var age = 20;

var person = {
    name,
    age,
    isStudent: true
}

console.log(person);

// Destructuring

var person = {
    name: "Akhil",
    age: 20,
    isStudent: true
}
var { name, age, isStudent } = person;

console.log(name);
console.log(age);
console.log(isStudent);

// promises

var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved")
    }, 2000);
})

promise.then((reslut) => {
    console.log(reslut);
})


// ! Spread Operator

var numbers = [1, 2, 3, 4, 5];

var newNumber = [...numbers, 6, 7, 8];

console.log(newNumber);