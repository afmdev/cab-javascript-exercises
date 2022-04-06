/** 
 * @ Author: Alejandro FM (alejanfm)
 * @ Create Time: 2022-04-04 13:19:02
 * @ Modified time: 2022-04-06 17:50:51
 * @ Description: https://github.com/alejanfm
 */


//! JavaScript Basics Exercises

console.log("Here start my JS exercises");

//TODO Writing expressions with variables:

//? EXERCISE 1
//* In your JavaScript file create a variable called myName with your name as the value. Put your name inside string quotes, e.g., "my name". Then add a line of code to print the variable name to the console after the previous message. Save your JavaScript file in your editor. Reload the HTML page in your browser. You should see your name printed. If not, investigate and fix it.

let myName = "Ale";
document.getElementById("myName").innerHTML = myName;
console.log(myName);



//? EXERCISE 2
//* Create a variable called age with a number that is your age. Do not use string quotes for numbers. Add a line to print that variable in the console. Save the file and reload the page. You should see your name and your age.

let age = 36;
document.getElementById("age").innerHTML = age;
console.log(age);



//? EXERCISE 3
//* Create a variable called juliaAge with a value 32. Create another variable called ageDiff and set it to an expression that calculates your age minus Julias's age. Print the value of ageDiff. Save the file and reload the page. You should see your age and the age difference. If you are younger than Julia, you should see a negative number.

let juliaAge = 1;
let ageDiff = juliaAge - age;
document.getElementById("ageDiff").innerHTML=ageDiff;
console.log(ageDiff);



//TODO Writing code with conditionals:

//? EXERCISE 4
//* Write a conditional that compares the variable with your age with the number 21. It should print either "You are older than 21" or "You are not older than 21", appropriately, depending on your age. Save your JavaScript file and reload the page. Make sure you see the correct message. Try changing your age in the JavaScript file to make sure the other message prints when it should.

let number21 = 21;
if (age > number21) {
    document.getElementById("number21").innerHTML="older than "+number21;
    console.log("You are older than "+number21);
} else {
    document.getElementById("number21").innerHTML="not older than "+ number21;
    console.log("You are not older than "+number21);
}


//? EXERCISE 5
//* Write a conditional that compares your age with Julia's age. This conditional will need to test if you are older, younger, or the same age, and print, appropriately, either "Julia is older than you", Julia is younger than you", or "You have the same age as Julia". Save your changes and reload the file.

if (juliaAge == age) {
    document.getElementById("compareJulia").innerHTML="You have the same age as Julia"
    console.log("You have the same age as Julia");
} else if (juliaAge > age) {
    document.getElementById("compareJulia").innerHTML="Julia is older than you"
    console.log("Julia is older than you");
} else if (juliaAge < age ) {
    document.getElementById("compareJulia").innerHTML="Julia is younger than you"
    console.log("Julia is younger than you");
}


//! JavaScript Array: 

//TODO Sorting an Array: 

//? EXERCISE 1
//* Create an array with all the names of your class (including mentors). Sort the array alphabetically. Then print the first element of the array in the console. On the next line, print the last element of the array in the console. On the next line, print all the elements of the array in the console (use a "for" loop). Save the file and reload the page. You should see the first element of the sorted array, the last element of the sorted array, and a list of all the elements in order in the array in the console.

const quokkas = [
    "Alejandro",
    "Jess",
    "Arno", 
    "John", 
    "Marta",  
    "Karolina", 
    "Angelina",
    "Raul",
    "Ottavia"
]
let sizeQuokkas = quokkas.length;

//Sort the array alphabetically and reverse
console.log(quokkas.sort());
//console.log(quokkas.reverse());

//Print the first element of the array in the console
console.log(quokkas[0]);

//Print the last element of the array in the console.
let lastQuokkas = quokkas.at(-1)
console.log(lastQuokkas);
console.log(quokkas.slice(-1));

//Print all the elements of the array in the console (use a "for" loop)
for (let i = 0; i < quokkas.length; i++) {
    console.log(quokkas[i]);
}

// for (let a of quokkas) {
//     console.log(a);
// }


//TODO Looping over an Array:

//? EXERCISE 2
//* Create an array with all the ages of the students in your class. Iterate the array using a while loop, and then print every age in the console. Add a conditional inside the while loop to only print even numbers. Write again a loop but use a "for" loop instead of a "while" loop. Save your changes to your JavaScript file. Reload the HTML page in your browser. You should see every age printed, then only the even numbers printed. If not, investigate and fix it.

const quokkasAge = [
    23,
    56,
    99, 
    2, 
    47,  
    31, 
    85,
    9,
    28
]

//*Iterate the array using a while loop, and then print every age in the console. 
//Don't forget to create a counter to run through the entire array 
let i = 0;
while(i < quokkasAge.length ) {
    console.log("While: "+quokkasAge[i]);
    i++;
}

//* Add a conditional inside the while loop to only print even numbers. 
let b = 0;
while(b < quokkasAge.length ) {
    if (quokkasAge[b] % 2 == 0){
        console.log("While even: "+quokkasAge[b]);
    }
    b++;
}

//* Write again a loop but use a "for" loop instead of a "while" loop.
let a = 0;
for (let a = 0; a < quokkasAge.length; a++) {
    console.log("For: "+quokkasAge[a]); 
}


//TODO Functions that use Arrays:

//? EXERCISE 3 & 4
//* Write a function that receives an array as a parameter and prints the LOWEST & BIGGEST number in the array to the console. Save the changes to your JavaScript file. Reload the HTML page in your browser. You should see the lowest number in the array printed in the console. If not, investigate and fix it.

// function theLowest() {
//     let theNumbers = Array.from(arguments);
//     console.log("Unsorted: "+theNumbers);

//     theNumbers.sort(function(a,b) { return a - b } );
    
//     console.log("Sorted: "+theNumbers);

//     let pos = 0;
//     let max = theNumbers.length-1;
//     console.log("The lowest: "+theNumbers[pos]);
//     console.log("The biggest: "+theNumbers[pos]);

// }
// theLowest(99,-4,48,67,294,-99,0,32,-1);

let myArr = [99,-4,48,67,294,-99,0,32,-1]

function theLowest(parameter) {
    console.log("Unsorted: "+parameter);
    parameter.sort(function(a,b) { return a - b } );
    console.log("Sorted: "+parameter);
    let min = 0;
    let max = parameter.length-1;
    console.log("The lowest: "+parameter[min]);
    console.log("The biggest: "+parameter[max]);
}
theLowest(myArr);


//? EXERCISE 5
//* Write a function that receives two parameters, an array, and an index. The function will print the value of the element at the given position (one-based) to the console. For example, given the following array and index, the function will print '6'. var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]; var index = 1; Save the changes to your JavaScript file and check your browser console. You should see the number at the correct index printed in the console. If not, investigate and fix it.

var myArr2 = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
var index = 1;

function valuePosition(p1, p2) {
    console.log("The number:" +p1[p2]+ " is in the position " +[p2] );
}
valuePosition(myArr2, index);


//? EXERCISE 6
//* Write a function that receives an array and only prints the values that repeat. For example, given the following array and index, the function will print '6,23,33,100'. var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]; Save the changes to your JavaScript file. Reload the HTML page in your browser. You should see an array of the repeated numbers printed in the console. If not, investigate and fix it.

var myArr3 = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];

function repeatedNumber(p1) {
    console.log("There is a clone: " +p1);
}
repeatedNumber(myArr2, index);



//? EXERCISE 7
//* Write a simple JavaScript function to join all elements of the following array into a string. myColor = ["Red", "Green", "White", "Black"]; Save the changes to your JavaScript file. Reload the HTML page in your browser. You should see the following in your console: "Red", "Green", "White", "Black". If not, investigate and fix it.

let myColor = ["Red", "Green", "White", "Black"];

function fromArrayToString(p1) {
    let colors = myColor.toString();
    console.log(" "+colors);
}
fromArrayToString(myColor);


