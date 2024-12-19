// !--------------------------------------LOOPS----------------------------------------------------
// ? Loops: Loops are used to execute the code again and again

// if we have to write "faiz alam" for 5 times , the simpler way to write it is to print it manually for 5 times

console.log("faiz alam");
console.log("faiz alam");
console.log("faiz alam");
console.log("faiz alam");
console.log("faiz alam");


//  but suppose if you have to write it for 100times that is where loops comes in 

for (let count = 1; count <= 5; count++) {
    console.log("faiz alam");
}
// here it will print it 5 times 


// ? ----------------------------For Loops-------------------------------
// now to see how the for loops works we can see it by this

for (let i = 1; i <= 10; i++) {
    console.log("i =", i);
}

// now if we want to print the i out side of the loops then it will not print because it defines as let and let key words keeps it block 


// -------------------------example of var loops---------------

for (var i = 1; i <= 3; i++) {
    console.log("i = ", i);
}

console.log(i); //here it will returm 6

// here it will print the value of i outside of loops because it defines with the var key word which scope is global but we always have to defines with let keyword
// end



// NOw let inderstand how the lopps works

for (let i = 1; i <= 5; i++) {
    console.log("faiz alam");
}

// here firt loops intialize the process and start with one then

/*
Intialisation               check       result            print in console           update the value

i=1 and then loops check if 1<=5 - return true  print the value 1 and the update the value 1+1= 2 again
i=2 and then loops check if 2<=5 - return true  print the value 2 and the update the value 2+1= 3 again
i=3 and then loops check if 3<=5 - return true  print the value 3 and the update the value 3+1= 4 again
i=4 and then loops check if 4<=5 - return true  print the value 4 and the update the value 4+1= 5 again
i=5 and then loops check if 5<=5 - return true  print the value 5 and the update the value 5+1= 6 again
i=5 and then loops check if 6<=5 - return false Ends the loops

*/

for (let i = 1; i <= 100; i++) {
    console.log("faiz alam");
}
console.log("the loop has been stoppped"); //it shows thhat first loops ends and then the second line runs


// now through loops we can also do so many work on of them id to calculate sum of 1 to n or 1 to 5

// calculation of sum 1 to 5

let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum = sum + i;
}
console.log("sum =", sum);


/* here firt loops intialize the process and start with one then
now lets see how does it works 

our sum = 0


Intialisation               check                result            print in console           update the value

i=1 and then loops check if 1<=5 - return true    and the update the value 1+1= 2  sum=0+1=1 again
i=2 and then loops check if 2<=5 - return true    and the update the value 2+1= 3 sum=1+2=3 again
i=3 and then loops check if 3<=5 - return true    and the update the value 3+1= 4 sum=3+3=6 again
i=4 and then loops check if 4<=5 - return true    and the update the value 4+1= 5 sum=6+4=10 again
i=5 and then loops check if 5<=5 - return true    and the update the value 5+1= 6 sum=01+5=15 again
i=6 and then loops check if 6<=5 - return false Ends the loops


the final value of sum is 15;
*/



// infinite  loops : infinite loop is a type of loop that never ends 
// we have not to do it because its every loops of every program take some space when we run the code in memory so if run a code in a infinite loops it create a jam like senario on your brouser

// examole

//! for (let i = 1; i >= 0; i++) {
// !    console.log("i =", i);
// ! }


// ? ------------------------------------------ while loop-----------------------------------------------

/* while loop is also a type of loop that do the same work, there is nothing which we can't do 
with for loop, these are just the diffeerent type of loops that we used to do for repetetion work 
*/

// syntax

while (condition) {
    //do some work
}


// example 1 : printing 1 to 10 with while loops

let i = 1;
while (i <= 10) {
    console.log("j = ", j);
    i++;
}

// example 2 : printing faiz alam with while loops

let i = 1;
while (i <= 10) {
    console.log("j = ", j);
    i++;
}

// ? ------------------------- Do-While Loop -------------------------------------------------

// syntax

do {
    // some work
} while (condition);

/*the difference between while loop and do while loop is while first check the condition
and the print the value , but do-while loop first print the value and then check the condition
that is whiy do while loop print the value atlest one time because it first print the value and check the condition 
and if the condition not true it will not print further and loops stop
*/

// exampl-1 

let i = 10;
do {
    console.log("faiz alam")
    i++;
} while (i <= 5);

// here it will print the value one time and then it stops because here stoping condition of i is 5 but it stars from 10;

// example -2

let i = 1;
do {
    console.log("i =", i)
    i++;
} while (i <= 10);



// ?----------------------Special Types of LOOP-----------------

// there is a special type of loops that is mainly used to iterate  on data types WakeLockSentinel, string, arays , ebjects etc 

// todo 1. for-in loop //it is mainly used to iterate on string and arrays

// syntax

// for (let val of strVal) {
//     //do some work
// }

// here we does not initialise the loop of not even put the stoping condition just take a string and arrays and put the loop on data type

// example 1

let str = "faizalam";
for (let i of str) {
    console.log("i = ", i);
}

// example 2 : if you want to know the size of the string
let size = 0;
// generally here we write the  iterarter i as val i.e, value which is individual character each time
for (let val of str) {
    console.log("val=", val)
    size++;
}
console.log("size of the strVal", size); //here we know the size of the string is equal to how many times the programe run to iterate string 

// todo 2. for-in loop :it is maily used in to iterate  in objects and arrays 

// syntax
// for (val in object / arrays) {
//     // do some work
// }

// example -1

let student = {
    name: "faiz alam",
    class: 12,
    rollNo: 55,
    useInstagram: true,
    salary: BigInt('1222334')
}
for (let i in student) {
    console.log("value of i", i);
} //it will always return of the keys of  the object

// example 2: now if you want to print and and value of the print too

let Car={
    company:"volvo",
    color:"red",
    engine:"V8 twin torbo",
    milege:22,
    isVerified:true,
    onRoadPrise:BigInt(43241)
}
for(let carVal in Car){
    console.log("key =", carVal, "value =", Car[carVal]);
}

// here we are able to print and keys and values of the objects