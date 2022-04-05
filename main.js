/** 
 * @ Author: Alejandro FM (alejanfm)
 * @ Create Time: 2022-04-04 13:19:02
 * @ Modified time: 2022-04-05 15:39:45
 * @ Description: https://github.com/alejanfm
 */


//! JavaScript Basics Exercises

console.log("Here start my JS excercises");

//TODO  Writing expressions with variables

//? EXCERCISE 1
//* In your JavaScript file create a variable called myName with your name as the value. Put your name inside string quotes, e.g., "my name". Then add a line of code to print the variable name to the console after the previous message. Save your JavaScript file in your editor. Reload the HTML page in your browser. You should see your name printed. If not, investigate and fix it.

let myName = "Ale";
document.getElementById("myName").innerHTML = myName;
console.log("myName");



//? EXCERCISE 2
//* Create a variable called age with a number that is your age. Do not use string quotes for numbers. Add a line to print that variable in the console. Save the file and reload the page. You should see your name and your age.

let age = 36;
document.getElementById("age").innerHTML = age;
console.log("age");



//? EXCERCISE 3
//* Create a variable called juliaAge with a value 32. Create another variable called ageDiff and set it to an expression that calculates your age minus Julias's age. Print the value of ageDiff. Save the file and reload the page. You should see your age and the age difference. If you are younger than Julia, you should see a negative number.

let juliaAge = 32;
let ageDiff = juliaAge - age;
document.getElementById("ageDiff").innerHTML=ageDiff;
console.log("ageDiff");



//TODO Writing code with conditionals:

//? EXCERCISE 4
//* Write a conditional that compares the variable with your age with the number 21. It should print either "You are older than 21" or "You are not older than 21", appropriately, depending on your age. Save your JavaScript file and reload the page. Make sure you see the correct message. Try changing your age in the JavaScript file to make sure the other message prints when it should.

let number21 = 21;
if (age > number21) {
    document.getElementById("number21").innerHTML="older than "+number21;
    console.log("You are older than "+number21);
} else {
    document.getElementById("number21").innerHTML="not older than "+ number21;
    console.log("You are not older than "+number21);
}


//? EXCERCISE 5
//* Write a conditional that compares your age with Julia's age. This conditional will need to test if you are older, younger, or the same age, and print, appropriately, either "Julia is older than you", Julia is younger than you", or "You have the same age as Julia". Save your changes and reload the file.

if ()


//! JavaScript Array: 

//TODO Sorting an Array 

//? EXCERCISE 1
//* Create an array with all the names of your class (including mentors). Sort the array alphabetically. Then print the first element of the array in the console. On the next line, print the last element of the array in the console. On the next line, print all the elements of the array in the console (use a "for" loop). Save the file and reload the page. You should see the first element of the sorted array, the last element of the sorted array, and a list of all the elements in order in the array in the console.


//? EXCERCISE 3


