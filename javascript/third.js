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

// example 3

let websiteMode = "dark";
let WebsiteColor;
if (websiteMode === "dark") {
    WebsiteColor = "black";
} else if (websiteMode === "light") {
    WebsiteColor = "light";
} else {
    WebsiteColor = "blue";
}
console.log(WebsiteColor);

//! this is a ype of single line of if else statements like we general not use this statement because it is not a professional one

if (websiteMode === "dark") console.log(websiteMode);


// !------------------------------------------------Ternarry Operators-----------------------------------------------------------

// generallly we are performing mathematical expressions on 1 and 2 operands but here we are performing on thre operators 
// ternary Operatoras are prformed on three operands means a , b , c

// Syntax

// ! condition ? true Output : false Output      IT IS SIMPLE AND COMPOUND IF ELSE STATEMENT

// this means if whatever the output of condition one if it is true then a statement will be executed and if it is false the b statement will be executed

// example1
let CarDrivingAge = 18;
let result = CarDrivingAge ? "elegible for driving" : "not eligible for driving";
console.log(result);


// example 2

let studentClass = 10;
let eligible;
let eligibleAge = studentClass >= 12 ? eligible = "he can go on picnick" : eligible = "he cant go on picknick";
console.log(eligible);




// ! -------------------------------------------Switch Statements-------------------------------------

/*The switch statement evaluates an expression, matching 
the expression's value against a series of case clauses, and executes statements after the first case clause with a matching value, 
until a break statement is encountered. The default clause of a switch statement will be jumped to if no case matches the expression's value.
*/
// ? sytax

switch (expression) {
    case caseExpression1:
      statements
    case caseExpression2:
      statements
    // …
    case caseExpressionN:
      statements
    default:
      statements
  }


  
const exprs = "lady finger";
switch (exprs) {
    case 'papyas': console.log("papayas is rupees 35 per kg");
        break;
    case "mangos": console.log("mangos are rupees 40 per kg");
        break;
    case 'guard':
    case 'lady finger':
        console.log("guard and lady finger is rupees 36 and 46 per kg");
        break;
    default: console.log("sorry we don't have any data on this");
}




//   example2

const foo = 0;
switch (foo) {
  case -1:
    console.log("negative 1");
    break;
  case 0: // Value of foo matches this criteria; execution starts from here
    console.log(0);
  // Forgotten break! Execution falls through
  case 1: // no break statement in 'case 0:' so this case will run as well
    console.log(1);
    break; // Break encountered; will not continue into 'case 2:'
  case 2:
    console.log(2);
    break;
  default:
    console.log("default");
}
// Logs 0 and 1