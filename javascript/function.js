// !----------------------------------------------------------Function--------------------------
// function is a block of code that perform some specific task , can be invoked whenever needed ,
// function is like a black box of code which takes some input and give some output when we call it , writing a function needs two most important thing 1. functioon name 2. calling a function with paranthesis right after the function name

// some in-built function that we already seen 

// 1. console.log("hello world") //here lof is function that prints hello world
// 2.  [1,2,3].push(4); //here push fuction is inserting the data into the array
// 3. let string="abcd"; string.toUpperCase() //toUppercase is function used to convert string to uppercse


//        function name                                                    2. calling function

//    function functionname(){

//      do some work                                                          functionname();

//    }




// function functionName(paranthesis1, paranthesis2){
//do some work
// }



// example 1

function myfunction() {
    console.log("hi this is fuction");
    console.log("and we are learning JS :)");
}

myfunction();   //this is the way we are calling function with the function name
myfunction();  //this shows that we can call or invoke same function as many time as we want   


// example 2 with para meter

// function myfunction(marameter)//msg count be any and its called parameter
// {
// console.log(parameter);
// }

// myfunction(argument:any thing that you want to paas in parameter); and here the msg called argument


function printMessage(msg) {
    console.log(msg);
}

printMessage("i love Js");


//function of calculating the sum of two numbers

function sum(a, b) {
    console.log(a + b);
}
sum(2, 3);


// now function return the value too 

function multiply(a, b) {
    return a * b;
    // now we can not return any value after this because return statement is the last line of the function and after this we cant return any thing;
}

multiply(5, 3) //and since we did not said to function to log we just returned it so we have to console.log() the function to print he value so we just save this function to variable

console.log(multiply(5, 3)); //and here we print the funtion value


// and we can write this function like this too

function devide(a, b) {
    devide = a / b;  //note the parameter valiable passed in this function will limit to this function only , it has block scope and beyond this there is no reach;
    return devide;
}

let devdVal = devide(10, 2);
console.log(devdVal);





// !--------------------------------------------------arrow Function--------------------------------------------------------

// arrow function is way to write functionin a compact way  | arrow function alse a concept of modern Javascript 

// example of sum of two numbers a and b and it can be stored in a variable

(a, b) => {
    console.log(a + b);
}
// this is function but we can not execute this because it does not have mnave and we did not saved in a variable

const multiplyofNum = (x, y) => {
    return x * y;
}
console.log(multiplyofNum(7, 4))  //here it will print the value because we saved into a variable


// example of multiplication of two numbers of devision

const division = (p, q) => {
    return p / q;
}

console.log(division(34, 5)); //6.8


//* very important thing when declare a function and sve it in a variable then it works as a normal variable and if we want we save another value too
//  example

let arrowFun = (a, b) => {
    return a + b;
}

console.log(arrowFun);  //here it will print the function

arrowFun = 68; //now here we store 68 in arrowFun variable not is value has changed

console.log(arrowFun); // 68

// now if you want to print any thing without parameter then we can do this too

const printHello = () => {
    console.log("hello world");
}
printHello();  //hello world

// if we have a single line of code then we can avoind curly braces too

const myname = () => console.log("faiz alam"); //but we genrally avoid this method



//!-------------------------------------------------foreach loop----------------------------------------

// ? foreach function is a method used to create loop on arrays
//what is method? :method is a function, when we associate any function to an object or any data structure then its called a methods 
// example of methods

"abc".toUpperCase; //here we associte this function to a string
[1, 2, 3, 4].push(4) //here we associate push fuction to an arrays
// [1,2,3].forEach() here we associate foreach function to an Array 


// * This is an important thin in java script that  function can be passed as a parameter and can be returned its value, this function is calleback function

// CALLBACKFUNCTION : calbjack function is a function to execute for each element in the array and it is also a function that can be passed as an argument is callled callback function

// example : of call back function

function HelloWorld() {
    console.log("hello World");
}

function print(HelloWorld) {
    return HelloWorld;
}


// foreach function or method array me har ak element k liye execute hota hia

let arr = [1, 2, 3, 4, 5];
arr.forEach(function printVal(val) { //here for each passing each element as a parameter of print Val one by one
    console.log(val) //and here not bind to call this function for-each automatically print the valur witchout calling it
})

// now in for each function which ever function we pass we in an arrow function

arr.forEach((val) => {
    console.log(val); //this is the same code for in arrow function
})

// we can also use it for string in an array

let cities = ["kolkata", "delhi", "pune", "mumbai", "rajkot"];
cities.forEach((val) => {
    // console.log(val);
    // if you want to print all the element in upperCase
    console.log(val.toUpperCase())
})



// there are some of more parrameter in foreach loop that we can pass in function but it is optional 
// 1, val for value
// 2, idx for indexe
// 3, array for array itself


let books = ["Almanak of Naval Ravikant", "Deep Work", "pshyclolgy of Money"];
books.forEach((val, index, array) => {
    console.log(val.toUpperCase(), index, array);
})



// For a given array of numbers, print the square of each value using the forEach loop.

let numberofArray = [1, 2, 3, 4, 5];
numberofArray.forEach((val) => {
    let square = val * val; //we can use val** operator too
    console.log(`square of ${val} is ${square}`);
})

// we can write call back funtion in onther way also

let square = [4, 9, 16, 25];
let perfectSquare = (val) => {
    if (val % 2 === 0) {
        console.log(`${val} is a perfect square`)
    } else {
        console.log(`${val} is not a perfect square`);
    }
}

square.forEach(perfectSquare);





// ? Map Methods : map methods is also a method like forEach method that creates a new array with thw result of some operations , the vlaue its callback returns are used to form a new array

// differenece between a forEach method and Map method

// forEach Method: forEach() method is used when we have to do normal calculations usinf value or printing the array value 
// map() Method : Map method is used when we have to rwturn a new array using the value of previos array

// syntac  of Map Method

// arr.map(callbackFxn(value,index,array)) syntax

// example of map method 

let color = ["blue", "red", "white", "pink"];
color.map((val) => {
    console.log(val) //simple printing value
})

//now copy value in new array

let pen = ["pentonic", "link", "ford"];
let newPen = pen.map((val) => {
    return val.toUpperCase(); //here it is returning a vew array or array copy
})

console.log(newPen);



// ? filter method: filter method creates a new array of elements that give true for a condition/filter;
// eg: all even elements 

let simpleArr1 = [1, 2, 3, 4, 5, 6, 7, 8];
let evenArray = simpleArr1.filter((val) => {
    return (val % 2 === 0);
})

console.log(evenArray); //array of even numbers

// eg: all odd elements 

let simpleArr2 = [1, 2, 3, 4, 5, 6, 7, 8];
let oddArray = simpleArr2.filter((val) => {
    return (val % 2 !== 0);
})

console.log(oddArray); //array of all odd numbers

// eg: array of all elements which is bigger than 3 

let simpleArr3 = [1, 2, 3, 4, 5, 6, 7, 8];
let biggerNum = simpleArr3.filter((val) => {
    return (val > 3);
})

console.log(biggerNum); //array of all number greater than 3


// ? Reduce Method : reduce method is used to perform some operations & reduces the array to sigle value , it returns that single value
// example if you want to calculate an average value of using value of an array or you want to calculate sum of the array

const array4 = [1, 2, 3, 4];

//0+1+2+3+4

const output = array4.reduce((previousVal, CurrentVal) => {
    return previousVal + CurrentVal;
    return previousVal * CurrentVal; // you can do this too for getting the multiplication of all elements
    return (previousVal + CurrentVal) / array4.length; //for getting the average value of 
})


// example of largest no. in an array

const output1 = array4.reduce((prev, curr) => {
    return prev > curr ? prev : curr; //agar previous current se bada hai to prev return kardo nahi toh current return kardo
})