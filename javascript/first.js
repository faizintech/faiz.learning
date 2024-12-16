//! first code of the js

console.log("this is me, Faiz alam ");
// second code
console.log("Faiz alam");

// !1. Variables: VAriables are container for Data.

//todo fullname = "Tony Stark";
//todo  age = 34;

// !there is a special type of value in  variable which is null

//todo  x = null;

// !there is an another special type of value which is used to store in variable called undefined but it is other than the null

//todo y = undefined;

//! the difference between undefinec and null is that in null we know that there is value but it is empty but in undefined theer is no value it is not defined


// ? there  is another value which is stored in a variable called boolean value.It is the type of variable which stores true and false value.
// ? Suppose we want to know is someone is following me on instagram or not so we will create a variable isFollow and then store true or false

isFollow = false;

// todo here is the consoles of the upper variables

// * console.log(isFollow);
// * console.log(y);
// * console.log(x);
// * console.log(age);
// * console.log(fullname);



//! Now there is some variable Rules for the assigning a variable Called Variable Rules


//? 1. variable names are case sensitive ; "a" & "A" are different

//todo  fullname = "faiz alam";
//todo  FULLNAME = "saif alam";

//todo  console.log(fullname);
//todo console.log(FULLNAME);

//? 2. Only letters,digits,undersscore and $ is allowed.(not even Space)

// if we have to write a variable we can only write 

//todo  fullName = "Camak case where first letter is small and second word first letter is capital";
//todo fullname = "normal case";
//todo full_name = "snake case";
//todo full - name="kebab case";
//todo FullName = "pascal case";


//? 3. only letter,underscore or $ should be 1st Character.

//todo $fullName = "faiz alam";
//todo fullname = "faiz alam";
//todo _fullName = "faiz alam";



//? 4. Reserved Words Cannot be Varable names.


// break	byte	case	catch
// char	class*	const*	continue
// debugger	default	delete	do
// double	else	enum*	eval
// export*	extends*	false	final
// finally	float	for	function
// goto	if	implements	import*
// in	instanceof	int	interface
// let*	long	native	new
// null	package	private	protected
// public	return	short	static
// super*	switch	synchronized	this
// throw	throws	transient	true
// try	typeof	var	void
// volatile	while	with	yield

// these type of variable we cant use




//! Key Words let ,Const & var


//? var : variable can be re-declared & updated.A global scope variable.

//? it is the oldes key word for declaring the variable but after comming of ES6:Eqma Script 6 in 2015 in which we are introduced to new key word let and const where we can re-declared variabe
//? ES6 is called is also modern Javascript

//* Let : Variable cannot be re-declared but can be updated . A block scope variable.

let fullName = "faiz alam";
let age = 34;
let totalPrice = 17.34;
// in this we can not re-declare but we can update the value;
fullName = "saif alam";

//* const : Variable cannot be re-declared or updated. A block scope variable.It is not changable

const myAge = 34;
const PI = 3.14;



//! note: if you have assign a variable having no value.so if you put a key-word let 

let x;

// then it will through no error and if you will print this value it will say undefined 
// but if you use the key word const 

// const b;

// and you try to print it it will throgh an error saying initaling value is not given you have to give initial value in const







// !Data Types in JavaScript :There is 2 types of data Types in JavaScript 1.Primitive 2. Non primitive 
// ? 1. Primitive Data :  In JavaScript, primitive data types are the most basic types of data. They are not objects and do not have methods. There are six primitive data types in JavaScript:
// ? 2 Non Primitive :In JavaScript, non-primitive data types are objects and are more complex than primitive data types. They can store collections of values and more complex entities. The main non-primitive type in JavaScript is the Object.


// *1.Numbers

let Age = 34;
let price = -55.56;

// number can be ppositive and negitive

// *2. String

let FullName = "Tony stark";

// *3. Boolean

let isFollow = true;

// *4. Undefined

let a;

// *5. Null
// when you print the r and know the typeof(r) then it will say object.null means missing of object thats it.
let r = null;

// *6. BigInt
// bigInt means big Integer when we want to store big data in any variable 

let Number = BigInt("12345678");

// 7. symbol

let S = Symbol("Hello!");

console.log(S);


// ?Non Primitive DataTypes

// * Objects: object is the collection of Values dand we can also say that it is the collection of primitive valus
// ! Function & arrays are catogrised in object

//todo objects are written in the key pare vales i.e name:faiz age:24 like this 

// generally we define objects with the const but we can also define it to let

const student = {
    fullName: "faiz alam",
    class: "IX",
    age: 13,
    CGPA: 8.3,
    isPass: true,
    grade: null
};
console.log(student);
console.log(student["age"]);
console.log(student.age);
console.log(student[3]);



// now lets say we want to change the value of object age key value 

student["age"] = student["age"] + 1;
student["fullName"] = student["Saif alam"];


// now if we print the value of age we git 13+1 = 14

console.log(student["age"]);
console.log(student["fullName"]);


// todo not: if there is let: we can updte the value of the; if there is const : we can not update the value ; but of there is an object then we can update the value of keys of the object


// ! Qestion : create a const object called "profile " to store information shown in the picture

const profile = {
    userName: "@faizinTech",
    profileName: "faiz alam",
    post: 12,
    followers: 569,
    following: 6,
    catogaris: "entreprenuer",
    profileSummary: "front-end developer"
};

console.log(profile);
console.log(typeof profile);
console.log(typeof profile["userName"]);