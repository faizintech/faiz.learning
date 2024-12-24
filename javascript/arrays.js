//! ---------------------------------------------------Arrays----------------------------------
//arrays are the collection of items  and it is a linear way in the collection of data ,
// arrays is the collection of item which we store in a single linear way , when we have to store a single type of data e,g. marks , super heros , color ther arrays comes un , in arrays the position maters or we can say index maters 


// example 1

let marks = [97, 75, 48, 83, 66];
console.log(marks)
console.log(typeof (marks)) //here it shows object because arrays classified into object but its different from normal object, when we see arrays it is too store into key pair values where key is its value index
console.log(marks.length) //it is a property  of arrays which we had learnt in string 



// example 2

const super_heros = ["iron man", "hulk", "thor", "batman", "antman", "superman"];
console.log(super_heros);

// example 3 : this example shows that we can store different type of data in arrays but its not a good practice

let info = ["volkswagan", "polo", "red", 13, 300000, true];
console.log(info);




// !--------------------------------------------Array Indices--------------------------------------------------
// * all the methods start from the small char.
// arr[0] , arr[1] , arr[2] .........   arrays stores data in this linear fashion 
// now to get these value of specific index we write

let marks1 = [93, 77, 76, 33, 22, 98];
let valAtindex_5 = marks1[5];
console.log(valAtindex_5);


//  now if you want to replace any value of array at any index lets say you want to replace value with 22 at index 3

marks1[3] = 22;
console.log(marks1);

// * string is immutable but arrays are mutable 



// !------------------------------------------Looping over Arrays---------------------------------
// looping on arrays means printing all the stored elements 
// for writing for loops on array we need length of the arrays because we need stoping condition


// we can use any type of array 

// example1 : for loop

let heroes = ["iron man", "hulk", "black Widow", "super Man"];
for (let idx = 0; idx < heroes.length; idx++) {
    console.log(`${idx} ${heroes[idx]}`);
}


// example2 : for-of loop

for (let hero of heroes) {
    console.log(hero)
}


// example2 :for-in loop


let cities = ["delhi", "mumbai", "kolkata", "gurgaon", "noida"];
for (let city in cities) {
    console.log(cities[city]);
}

// now we can run so much function on the arrays with the help of loops

let classStudent = ["faiz alam", "saif alam", "ayesha alam", "laiba alam"];
for (let student of classStudent) {
    console.log(student.toUpperCase());
} //like performing a all char to uppercalss 




// !--------------------------------------------------arrays method---------------------------------------------------------

// ? array push method: array push method is used to add something in the end of the array

// for example we have the list of veggies

let vegitables = ["pottato", "ladyfinger", "colifloer", "onions"];


vegitables.push("carort"); //it adds carrot at the end of the array vegitables
console.log(vegitables);



// ? pop() method it delete the item from the end of the  arrays of food item
// vegitables.pop(); // 

let deletedItem = vegitables.pop(); //and her we can save the item like this
console.log(` the deleted item from the array is ${deletedItem}`);


// ? shift() method : it is used to delet item from the start of the array

let cars = ["polo", "carens", "venue", "safari"];
console.log(cars);
cars.shift(); // it delet the item from start of the array and it changed the opriginal array
console.log(cars); // and it changed the original value too

// ? toString : to ptint an array in strings

console.log(vegitables); //printing like normal array

console.log(vegitables.toString()); //it return an array in string but it did not change array originally originally vegitables be in array form

// ? concat() : joins arrays & returns the result

let marvelHeroes = ["ironman", "spiderman", "antman"];
let dcHeroes = ["superman", "batman"];

let heros = marvelHeroes.concat(dcHeroes);
console.log(heros) //here it returned the combined value of marvel and dc heroes & it is too not change the original array

console.log(marvelHeroes, dcHeroes); //here it returned the original CSSMathValue;

let anotherhero = marvelHeroes + dcHeroes; // this method is used to concat the string of arrays

console.log(anotherhero); //here it will return the combined value in string


//  ? slice() method: slice method is slice the value from your given index from start to end like whe have done in string
let television = ["sony", "samsung", "Apple", "bravia", "vu"];
let sliced = television.slice(1, 3); //it return the sliced value and also does not change in the original value note: ending index is not inclusive
console.log(sliced);

// ? splice() method : splce(startingIdx,no. of element you want to delete,newElements you wnat to add)   change in original array (add, remove and replace)

let array=[1,2,3,4,5,6,7,8,9];
array.splice(3,4,101,102,103,104,105);
console.log(array);

// useCase 1: if i have to add element
 let array2=[1,2,3,4,5];
array2.splice(2,0,101); //if we have to only add an element at index 2
console.log(array2);

// useCase 2: if we have to only delet the element at index 5

array2.splice(5,1); 
console.log(array2);

// use case 3: if we have to  to delete only one element add 102 insted of the current element at index 4
 array2.splice(4,1,102);
 console.log(array2)



//  * important notes 
// if we use splice method without using no of elements to be delete and or add the it will act as slice() method and delete all the elemwnt from the given index
// example

let array4=["java","python","javascript","C","C#",];
array4.splice(2);
console.log(array4);