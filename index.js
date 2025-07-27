// ===================================================================================
//                          JavaScript Practice 02 - SMIT
// ===================================================================================

// ===================================================================================
//                          1 - Intro, Variables, Data Types
// ===================================================================================

// ==========================================================
// Adding Multiple Types of Values with "reduce" Method:
// ==========================================================

const prices = [10, '15', 20, 'Invalid'];
const total = prices.reduce((sum, price) => {
  return sum + price;
}, 0);

console.log(total); // 101520Invalid

// ==========================================================
// Adding numbers with "For of" Loop:
// ==========================================================

const numbers = [1, -1, 2, 3];
let sum = 0;

for (let n of numbers) {
  sum += n;
}

console.log(sum); // 5

// ==========================================================
// Adding numbers with "reduce" Method:
// ==========================================================

const total1 = numbers.reduce((sum, number) => (sum += number));
console.log(total1); // 5

// ===================================================================================
//                  2 - Manipulating String, Numbers & Math Operators
// ===================================================================================

// ====================================
// How to check the value of a String?
// ====================================
let str = 'Hello Students';
let strCheck = str.includes('U'); // retuns TRUE or FALSE
console.log(strCheck); // if "H" available, it returns TRUE

// =============================================================
// How to convert a String (containing a number) into a Number ?
// =============================================================
let n1 = '5';
// OR
// let n1 = prompt("What is your age?");
// OR
// let n1 = prompt("What is your age?", "18"); // we can define a default value like "18".
let n2 = 10;

console.log(typeof n1); // string

console.log(n1 + n2); // 510 (contatination)

console.log(+n1 + n2); // 15 (additiong)
console.log(parseInt(n1) + n2); // 15 (additiong)
console.log(Number(n1) + n2); // 15 (additiong)

// =============================================================
// How to generate a Random Number?
// =============================================================
let randNum = Math.random(); // it generates random number b/w 0 - 1
// randNum = randNum * 10;
// OR
randNum *= 10;
let roundedNum = Math.round(randNum);

// -------------------------- OR -------------------------------

let randNumber = Math.round(Math.random() * 10);
console.log(randNumber);

// =============================================================
// Guess the Number (Game)
// =============================================================
let userNum = prompt('Guess the number, please');

if (userNum == roundedNum) {
  console.log('WOW! You have win the game!');
} else {
  console.log('Sorry! You have lost the game!');
}
console.log('The number was: ' + roundedNum);

// =============================================================
// Even or Odd (Game)
// =============================================================
let userInput = prompt('Even or Odd?');
let compNumber = Math.round(Math.random() * 10);
let isEven = compNumber % 2 === 0;

if (isEven && userInput === 'even') {
  console.log('You Won! ' + compNumber);
} else if (!isEven && userInput === 'odd') {
  console.log('You won! ' + compNumber);
} else {
  console.log('You Loose! ' + compNumber);
}

// ===================================================================================
//                      3 - Operators, If, Else, For loops
// ===================================================================================

// =============================================================
// Welcome to Kids - Assignment
// =============================================================
let ageInput = prompt('Enter your age: ');

if (ageInput <= 10) {
  console.log('You are Welcome!');
} else {
  console.log('You are not allowed!');
}

// =============================================================
// Table Printing  - Assignment
// =============================================================
let usrInput = prompt('Enter any number:');

for (let i = 1; i <= 10; i++) {
  // document.write(userInput+" x "+ i +" = "+userInput*i+"<br>");
  // OR
  console.log(usrInput + ' x ' + i + ' = ' + usrInput * i);
}

// ===================================================================================
//                          4 - Functions, Recursions, Closures
// ===================================================================================

function writeData(data, times) {
  if (times > 0) {
    writeData(data, times - 1);
    console.log(data);
  }
}

writeData('Hello', 5);

function factorial(num) {
  if (num > 1) {
    return num * factorial(num - 1);
  }
  return 1;
}

let fact = factorial(5);
console.log(fact);

// ---------------------------------- xxxxxxxxxx ------------------------------------

// =============================================================
// Constructor Function (Methodand) & Prototype
// =============================================================
// Old Approach:
// function objCreator(model, make) {
//     var car = {
//         model: model,
//         make: make
//     }
//     return car;
// }

// function objCreator(model, make) {
//     var car = {}

//     user.model = model;
//     user.make = make;

//     return car;
// }

// // New Approach:
// // We create Constructor Function (Method) in order to create objects:
// function Car() // "Car" is a "Constructor Function (Method)", works like a Class.
// {
//     this.model = 2010;
//     this.make = "Honda";
//     // We don't define method here.
//     // this.ready = function () {
//     //     console.log(`${this.color} car is ready`);
//     // }
// }

// var car1 = new Car();
// // We can create property outside the Constructor Function, even after creating any object.
// Car.prototype.price = 500000;
// Car.prototype.color = 'Black';

// // We can create method outside the Constructor Function, even after creating any object.
// Car.prototype.drive = function () {
//     console.log(`${this.color} car is ready for driving`);
// }

// console.log(car1 instanceof Car); // true
// console.log(car1); // Car {model: 2010, make: 'Honda'}
// // Properties of an Object (car1)
// console.log(car1.model); // 2010
// car1.model = 2015;
// console.log(car1.model); // 2015
// console.log(car1.price); // 500000
// console.log(car1.color); // Black
// // car1.ready(); // Black car is ready for driving
// car1.drive(); // Black car is ready for driving

// =============================================================
// Premitive Values and Non-Premitive Values
// =============================================================

// // Premitive Values (copied with their "values"):
// var num = 3;
// var num2 = num;
// num2++;
// console.log(num); // 3
// console.log(num2); // 4 (COPIED WITH ITS "VALUE")
        
// // Non-Premitive Values (copied with their "reference"):
// // Example 1 (Object)
// var obj = {num: 3}
// var obj2 = {num: 3}
// var obj3 = obj
// console.log(obj == obj2); // false (both are not equal)
// obj3.num++;
// console.log(obj); // {num: 4} (copied with their "reference")
// console.log(obj2); // {num: 3}
// console.log(obj3); // {num: 4}

// // Non-Premitive Values (COPIED WITH ITS "REFERENCE")
// // Example 1 (Array)
// var arr = [3]
// var arr2 = [3]
// var arr3 = arr;
// console.log(arr == arr2); // false (both are not equal)
// arr3[0]++;
// console.log(arr); // [4] (COPIED WITH ITS "REFERENCE")
// console.log(arr2); // [3]
// console.log(arr3); // [4]

// =============================================================
// "for in" loop for "Object" + Object Literal + "in" Keyworkd
// =============================================================
var obj = {
    color: 'white',
    length: '3cm',
    speed: '24km/h',
    "background color": 'red' // we can keep "space" within name of a key (Object Literal)
}


for(key in obj) {
    console.log(key); // color length speed (these are the "keys")
    // console.log(obj.key); // undefined
    console.log(obj[key]); // white 3cm 24km/h (these are the "values")
    // NOTE: We use "Square Brackets" [], if we want to access "value" of a key in an object.
}

// NOTE: We can confirm a key in an object by using the followings:
console.log('color' in obj); // true
console.log(obj.hasOwnProperty('color')); // true

console.log('data' in obj); // false
console.log(obj.hasOwnProperty('data')); // false

console.log(obj.hasOwnProperty('valueOf'));// false ("hasOwnProperty" only checks in keys, not in "prototypes")

console.log('valueOf' in obj); // true ("in" checks in the keys, as well as in "prototypes")
