// !---------------------------------------------Conditional Statements--------------------------------------------------------------

// conditional statements are the most important statements in java script 


// ? 1. if statements 
// if is a reserved key in javascript

// examlpe1
let age = 25;

if (age >= 18) {
    console.log("You can Vote");
}
if (age < 18) {
    console.log("you cannot Vote");
}

// exmple2

let mode = "light";
let color;

if (mode === "dark") {
    color = "black";
}

if (mode === "light") {
    color = "white";

}
console.log(color);


// ? if else Statements

// example1

if (mode === "dark") {
    color = "black";
}

else {
    color = "white";

}
console.log(color);

// example2

if (age >= 18) {
    console.log("You can Vote");
}
else {
    console.log("you cannot Vote");
}

// example 3 odd and even 

let number = 6;

if (number % 2 === 0) {
    console.log(number, "is even");
} else {
    console.log(number, "is odd");
}

// ? if else if else conditional 

// example1
let drinkingAge = 18;
if (drinkingAge >= 22) {
    console.log("can drink ");
}
else if (drinkingAge === 18) {
    console.log("drink at house");
}
else {
    console.log("can not drrink");
}

// example2

let myAge = 24;
if (age >= 60) {
    console.log("senior");
}
else if (age >= 30) {
    console.log("he is middle");
}
else {
    console.log("he is child");
}
