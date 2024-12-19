const profile = {
    userName: "@razaulmustafa05",
    name: "Razaul Mustafa",
    age: 21,
    isOnInstagram: true,
    noOfFollowers: 152,
    noOfFollowing: 145,
    monthlyIncome: null,
    haveFather: undefined,
    desireIncome: BigInt("23455785636"),
    sign: Symbol("$")
}


function changefatherstatus() {
    profile["haveFather"] = true;
}
;


console.log("this is me faiz alam");
//  primitive data type

// *sring

let name = "123" + 123;
console.log(name);
// * NUmber

let age = 24 + 1;
console.log(age);


// * boolean

let isFollow = true;

console.log(isFollow);


// * NUll

let a = null;

console.log(a);

// undefined 

let hasFather;

// bigInt

let infiniteNumber = BigInt("1453654584561847");

// symbol

let x = Symbol("%")





// ! Non primitive data type

// * Object : 

// const amazon = {
//     userName: "@razaulmustafa05",
//     name: "Razaul Mustafa",
//     age: 21,
//     isOnInstagram: true,
//     noOfFollowers: 152,
//     noOfFollowing: 145,
//     monthlyIncome: null,
//     haveFather: undefined,
//     desireIncome: BigInt("23455785636"),
//     sign: Symbol("$")
// };




// practice 3

// let numFromUsers = prompt("Enter any Number:");
// if (numFromUsers % 5 === 0) {

//     console.log(numFromUsers, "is the multiple of 5");
// } else {
//     console.log(numFromUsers, "is not the multiple of 5");
// }

// practice 4

// type 1

// let marks = prompt("enter your marks:");
// let grades;
// if (marks >= 80 && marks <= 100) {
//     grades = "A";
// } else if (marks >= 70 && marks <= 79) {
//     grades = "B";

// } else if (marks >= 60 && marks <= 69) {
//     grades = "C";
// } else if (marks >= 50 && marks <= 59) {
//     grades = "D";
// } else if (marks <= 49) {
//     grades = "F"
// }

// console.log("according to your marks:",marks,",your grade is ", grades);


// practice 4 : print all the even numbers from 0 to 100

// type 1:

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log("number", i)
//     }
// }


// type 2

// let evenNumber = 0;
// while (evenNumber <= 100) {
//     if (evenNumber % 2 == 0) { console.log("this is even number", evenNumber) }

//     evenNumber++;
// }

// type 3

// let PrintEvenNumber = 0;

// do {
//     if (PrintEvenNumber % 2 == 0) {
//         console.log(PrintEvenNumber)
//     }
//     PrintEvenNumber++;
// } while (PrintEvenNumber <= 100);


/*practice question-2: create a game where you start with any random game number.Ask the user to 
keep guessing the number untill the user enters correct Value*/

// let gameNumber = 25;
// let userNum = prompt("guess the random Number");
// while (userNum != gameNumber) {
//     userNum = prompt("you enter wrong Number . Guess again");

// }

// console.log("congratulation you enter the right Number");


// practice question-1: promt the user to enter their full name , generate the user name based on their input,start user name with @ ,followed by their full name and ending with the length of of full name , e,g. @karan4

let Name = "faiz alam";
// let Name = prompt("enter your full name");
Name = Name.trim(); //removing all white spaces before and after the string
Name = Name.replace(" ", ""); //removin all the spaces between the string

let nameLength = Name.length;
let username = `@${Name}${nameLength}`;
console.log(username);



