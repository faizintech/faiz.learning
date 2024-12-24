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

// arrow function is qay to write functionin a compact way  | arrow function alse a concept of modern Javascript 

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

arrowFun=68; //now here we store 68 in arrowFun variable not is value has changed

console.log(arrowFun); // 68

// now if you want to print any thing without parameter then we can do this too

const printHello=()=>{
    console.log("hello world");
}
printHello();  //hello world

// if we have a single line of code then we can avoind curly braces too

const myname=()=>console.log("faiz alam"); //but we genrally avoid this method



//!-------------------------------------------------foreach loop----------------------------------------

// foreach loops in arrays

