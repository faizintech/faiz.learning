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






