// !--------------------------------------------- String -----------------------------------
// string is a sequence of character use to represent text.

let str = "faiz alam";  //string can be created in double quote
let str1 = 'saif alam';  //string can be alse be created in single  quote



//to know the length of the string

console.log(str.length);

// to know the indices of string

console.log(str[0], str[1], str[2], str[3], str[4], str[5], str[6], str[7], str[8],)



// ? Template Literals : Template Literals have a way to embedded expressions in string
// it is written in backtik quote like `this is a template literals`
// and expressions should be written as ${expressions}

// example-1 : template Literals : it is also a special type of string

let templateLiteral = `this is a template literal`;
let type = typeof (templateLiteral); //this is way to know data type
console.log(typeof templateLiteral); //this is an another way to know data type
console.log(templateLiteral);



// now what is the difference between normal string and template literal lets understand it with normal and kiteral templates

let obj = {
    fruitName: "mangos",
    price: 300
}

// normal string

console.log("the price of the", obj.fruitName, "is", obj.price, "rupees");

// special strin or template literal
let output = `the price of the ${obj.fruitName} is ${obj.price} rupees`; //here you can embede the other data types in  single string
console.log(output);

// todo this embeded phenomena,  means writing exoressions in string or to create strings by doing substitution of place holder  is known as Stringn interpolation

// let interpolation = `this is ${embededExpression} string`;

// example
let sum = `the sum of 1 ,2 and 3 is ${1 + 2 + 3}`;
console.log(sum);


//? excape charcter 
// it is a character which is mainly used to give some functionality to the string

// for printing in next line
console.log("this is the firts line\nand this second line")
// for giving a tab space in line
console.log("this is the way where we give \ttab in any string")


// ? String Methods/function : 
// it is a built in methods or we can say function which do some work string 


// toUpperCase()

let string = "please make this sentence to uppercase";
let newString = string.toUpperCase(); //any chnage in string will create a new string it will not change the previous one if you want to change the previous string you have to save the new string to previous variable

string = string.toUpperCase();  //now the previous string has changed
console.log(string);
console.log(newString);


// * javaScript string in immutable in javaScript

// toLoweCase

let string2 = "PLEASE MAKE THIS SENTENCE TO LOWERCASE";
string2 = string2.toLowerCase();
console.log(string2);

// Trim method : this method is used to trim / remove all the void spaces from string from sthe starting and ending of the string

let string3 = "     remove all the white spaces from starting and ending    ";
string3 = string3.trim();
console.log(string3);


// String.slice(start,end):this method is used to cut any pieces from the string 


let string4 = "faiz alam";
string4 = string4.slice(0, 4);
console.log(string4);


//string concatination string1.concat(string2) :this method is used to joint two string 

let st1 = "this is the first string";
let st2 = "this is the second string";

let merge = st1.concat(st2);
console.log(merge);

// * but you ca alse concatinate two string via +

// example:
console.log(st2 + st1);



// string replace : it is the method to replace any charcter form string sting.replace(oldVal,neVal)

let string5 = "hello";
let replaceString = string5.replace("h", "y" && "o", "");
console.log(replaceString);


// replace all : if we want to replace all the matching value of string
let string6 = "helooooloolo";
let replaceAllString = string6.replaceAll("lo", "p");
console.log(replaceAllString);


// str.charAt(idx)    : this function bascallly is to know for the charcter at the given index numver

let string7="this is a string";
console.log(`the character at index 7 is ${string7.charAt(0)}`);