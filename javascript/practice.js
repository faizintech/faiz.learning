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



// practice question one on arrays
// Qs-for given array with marks of student -> [85,97,44,37,76,60] find the average marks on the entire class

let marksOfStudent = [85, 97, 44, 37, 76, 60];
let sumOfTotalMarks = 0;
let averageMarks;
for (let idx = 0; idx < marksOfStudent.length; idx++) {
    sumOfTotalMarks = sumOfTotalMarks + marksOfStudent[idx];
}
averageMarks = sumOfTotalMarks / marksOfStudent.length;
console.log(`average marks of the entire class is ${averageMarks}`);

// we can solve this question via for of loop
let sum = 0;
for (val of marksOfStudent) {
    sum = sum + val;
}
let avg = sum / marksOfStudent.length;
console.log(avg);



// practice question - for a given array with price of 5 items -> [250,654,300,900,50] , all items have an offer of 10% OFF on them . change the array to store final price after applying offer

let price = [250, 654, 300, 900, 50];
let i = 0;
for (let val of price) {
    let offer = val / 10;
    price[i] = price[i] - offer;
    console.log(`the price of items after discount is ${price[i]}`);
    i++;
}

// a for loop for solving the same method it is easier when it for loop because in this method we dont have to put extra method to get the index
let items = [250, 654, 300, 900, 50];
for (let idx = 0; idx < items.length; idx++) {
    let offer = items[idx] / 10;
    items[idx] -= offer;
    console.log(`the price of the item after discount is ${items[idx]}`)

}
console.log




// Create an array to store companies -> “Bloomberg”,“Microsoft”,“Uber”,“Google”,“IBM”,“Netflix”;
// a. Remove the first company from the array

// b. Remove Uber & Add Ola in its place

// c. Add Amazon at the end

// Create an array to store companies -> ["bloomberg","microsoft","Uber","Google","IBM","Netflix"];
// a. Remove the first company from the array

// b. Remove Uber & Add Ola in its place

// c. Add Amazon at the end


let arr = ["bloomberg", "microsoft", "Uber", "Google", "IBM", "Netflix"];
// a
arr.shift();
console.log(arr);

// b
arr.splice(1, 1, "ola");
console.log(arr);

// c
arr.push("Amazon");
console.log(arr);



// Create a function using the “function” keyword that takes a String as an argument &
// returns the number of vowels in the string.

function noofVowels(string) {
    let stringMethod = "string";
    if (typeof (stringMethod) !== typeof (string)) {
        console.log("argument is not string")
    }
    count = 0;
    for (char of string) {
        if (char === "a" || char === "i" || char === "o" || char === "u" || char === "e") {
            count += 1;
        }
    }
    return count;
}

// Create an arrow function to perform the same task.

const countVowels = (str) => {
    let count = 0;
    for (i = 0; i <= str.length; i++) {
        if (str[i] === "a" || str[i] === "i" || str[i] === "o" || str[i] === "u" || str[i] === "e") {
            count += 1;
        }
    }
    return count;
}

console.log(countVowels("this is"))


// For a given array of numbers, print the square of each value using the forEach loop.

let numberofArray = [1, 2, 3, 4, 5];
numberofArray.forEach((val) => {
    let square = val * val; //we can use val** operator too
    console.log(`square of ${val} is ${square}`);
})


// 6. We are given array of marks of students. Filter our of the marks of students that scored 90+.

let marks = [77, 98, 96, 88, 44, 90, 91, 99, 95, 93];
let StudentPlus90 = marks.filter((val) => {
    return val > 90;
})

console.log(StudentPlus90);


// Take a number n as input from user. Create an array of numbers from 1 to n.
let numberFromUser = prompt("enetr any number");
let array = [];
for (let i = 1; i <= numberFromUser; i++) {
    array.push(i);
}

//Use the reduce method to calculate sum of all numbers in the array.
let sumOfArray = array.reduce((previous, current) => {
    return previous + current;
})
//Use the reduce method to calculate product of all numbers in the array.

let productofArray = array.reduce((previous, current) => {
    return previous * current;
})




/**
 * @return {Function}
 */
var createHelloWorld = function () {
    function fun2() {
        console.log("Hello World");
    }
    return fun2();
};

console.log(createHelloWorld());
/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */