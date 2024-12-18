// !------------------------------------------------ comments----------------------------------------------

// 1. this is a sigle line Comments

/* 2. this is a double
line operators */




// ! -----------------------------------------------------Operators------------------------------------------//

//operators are the assiging symbols through which we can perform some mathematical expressions on the valuse operators are like plus, minus , astrich , slash and many more            

// !---------------------------- . Arithmatic Operators -------------------------

let a = 5;
let b = 2;

//?  plus (" + ") operator
// if we print a+b in a string then it will print as string not the calculations of value
console.log("a+b");
// but if only pass (a+b) it will add and print the addition
console.log(a + b);
// but if want to print both at once
console.log("a+b=", a + b)


// ? minus (" - ") operator

console.log("a-b");
console.log(a - b);
console.log("a-b=", a - b);

// ? astrisk(multiply) (" * ")

console.log("a*b");
console.log(a * b);
console.log("a*b=", a * b);

// ? slash(devide) (" / ") operator 

console.log("a/b");
console.log(a / b);
console.log("a/b=", a / b)


// ? Modulas Operator

// modulas operator (" % ") : it brings the remainder after the dividion of two numbers

console.log("a%b");
console.log(a % b);
console.log("a%b=", a % b) //the answer will be 1 because the remainder of 5%2 will be 1



// ? exponentiation 

// exponentiation opertaor (" ** ") : it is used to get the power. It means if we want the power to calculate we use this double astrics

console.log("a**b");
console.log(a ** b);
console.log("a**b=", a ** b)  //!it means a to the power b(a^b) = 5^2 = 25


// ? unary Operators

/*unary operators are the operators which does not need two operands like the previous operators like arithmatic,
exponentiation and modulas
these are two different kinds 
 
1.Increment 
2 Decrement
 
*/

//  * Increment: it is the operator that automatically +1 to the given value

let c = 12; //here c=12;
c++; //now c =c +1
console.log("c = ", c);

// todo post Increment

let aNumber = 12;
console.log(aNumber++); //here it will print 12 because first it will print the number and then it will change the value by one

// todo pre Increment

let aNumber2 = 12;
console.log(++aNumber2); // here it will print 13 because first it will increase the value by one and then print the number





// *Decrement : it is the operator that automaticall -1 to the given value

let d = 12;  //here is d=12
d--; //now here  d = d-1;
console.log("d = ", d)

// todo post Decrement: 

let NumberOne = 24;
console.log(NumberOne--); //here it will print 24 because first it will print the number and then it will calculate the value 

// todo pre Decrement:

let NumberTwo = 24;
console.log(--NumberTwo); //here it will print 23 because first it will decrease the number and then it will print the value






// ! ---------------------------------------------Assignment Operators -----------------------------------

// we are using these value for answers 
// for getting the right value please print one console at a time 


let p = 5;
let q = 2;


// ? equal to : (" = ") 

let assigningValue = 45;

// ? plus equal to : (" += ") : it means a=a+1;

// p += 4;
console.log(p) // here it will first calculate p=p=4; where p is 5 then it is p=5+4; i.e, 9


// ? minus equal to (" -= "): it means a=a-1;

// p -= 3;
console.log(p); // here it will first calculate p=p-3; where p is 5 then it is p=5-3; i.e, 2


// ? astrisk equal to (" *=  "): it means a=a*1;

// p *= 4;
console.log(p) //here it will first calculate p=p*4; where p is 5 the it is p=5*4 = 20;


// ? slash equal to (" /= ") : it means a=a/1;

// p /= 3;
console.log(p); //here it will first calculate p=p/3; where p is 5 then it is p=5/3;

// ? modulo equal to (" %= "): it means a=a%1;

// p %= 4;
console.log(p); //here it will first calculate p=p%4;; where p is 5 then it is p=5%4;   



// ? exponensiation equal to : (" **= "): it means a=a**1;

// p **= 2;
console.log(p); //here it will first calculate p=p**4; where p is 5 then it is p=5**6;




// !-------------------------------------Comparision Operators----------------------------------------------------

// these operators is used to compare values
// we will use this values to understand these concept 

let y = 23;
let z = 13;

// ? Double Equal to (" == "): To check if y and z is equal or not

console.log("is y equal to z=", y == z); //this means weather y is equal to z or not and it will print a boolean value in result as y=23;z=13 it is not equal it will print false


// ? Not equal to :(" != "): to check is it not equal to 

console.log("is y not equals to z =", y != z); //here it it will check wheather y is not equal to z :y =23 ;z=13; the answer is true because it is not equal to 


// ? triple equalto : (" === ")

/* if ther is two variable called
let a=5;
let b="5"

now if we check its value 

console.log(a==b); // it will print true


*it is not true because a has number as value and b has string as value , but when we use (" == ") this operator 
*It don't check the datatype it convert the string into a number and then check the value and if value is identical as the other one it will print as true

Now, to avoid this mistake we use force equal to (" === ") operator which not only check the value but also check the datatyps


*/

console.log("is this y === z = ", y === z); // here it is not true or false


// ? force equal to (" !== ")

console.log("is this y !== z ", y !== z); // here it is true 


// ? greater than  (" > ");

console.log("is y is greater than z=", y > z)  //true

// ? greater than equal to (" >= ")

console.log("is y greater than equal to z", y >= z) //true


// ? less than (" < ")

console.log("is y less than z", y < z); //false

// ? less than equal to (" <= ")

console.log("is y less than equal to z", y <= z)  //false


// !----------------------------------------------------Logical Operators--------------------------------------------------

// Where to use logical operators? 
/* if there are two expressions the answer of first expressions will be true or false and answer of second expression will be true or false then what will be 
the final output of these two expressions combindely , here we use the logical operators

 */

// ? Logical AND

//   logical AND says that if the output one is true and and output 2 is true then only the final answer will be true

let cond1 = y > z;
let cond2 = y === 23;

console.log(cond1 && cond2, "cond1 && cond2"); //here it will print true because both the expressions are true 


// ? Logical OR 

// Logical OR says that even if one of the both expressions are true it will print true 

let conditon1 = y < z;
let condition2 = y == 23;

console.log("condtion1 || condition2 is ", conditon1 || condition2); //this will print true because one of the expressions are true


// ? Logical NOT    

// Logical Not operator says the no matter whatever the valu is i will change the value 

let condition = y > z;
console.log("y is greater than z", !condition); // it will print false because we use the not operator




// !------------------------------------------------Ternarry Operators-----------------------------------------------------------

// generallly we are performing mathematical expressions on 1 and 2 operands but here we are performing on thre operators 
// ternary Operatoras are prformed on three operands means a , b , c

// Syntax

// ! condition ? true Output : false Output      IT IS SIMPLE AND COMPOUND IF & ELSE STATEMENT

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

