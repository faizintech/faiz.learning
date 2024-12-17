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

const amazon = {
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
};




// practice 3

let numFromUsers = prompt("Enter any Number:");
if (numFromUsers % 5 === 0) {

    console.log(numFromUsers, "is the multiple of 5");
} else {
    console.log(numFromUsers, "is not the multiple of 5");
}

// practice 4

// type 1

let marks = prompt("enter your marks:");
let grades;
if (marks >= 80 && marks <= 100) {
    grades = "A";
} else if (marks >= 70 && marks <= 79) {
    grades = "B";

} else if (marks >= 60 && marks <= 69) {
    grades = "C";
} else if (marks >= 50 && marks <= 59) {
    grades = "D";
} else if (marks <= 49) {
    grades = "F"
}

console.log("according to your marks:",marks,",your grade is ", grades);