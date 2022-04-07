/** 
 * @ Author: Alejandro FM (alejanfm)
 * @ Create Time: 2022-04-04 13:19:02
 * @ Modified time: 2022-04-07 14:27:46
 * @ Description: https://github.com/alejanfm
 */


//! JavaScript Basics Exercises
const style = 'font-weight: bold; font-size: 15px; ';
const style2 = 'font-weight: bold; font-size: 15px; color:red;';



console.log('         888             d8b                    .d888               \r\n         888             Y8P                   d88P\"                \r\n         888                                   888                  \r\n 8888b.  888  .d88b.    8888  8888b.  88888b.  888888 88888b.d88b.  \r\n    \"88b 888 d8P  Y8b   \"888     \"88b 888 \"88b 888    888 \"888 \"88b \r\n.d888888 888 88888888    888 .d888888 888  888 888    888  888  888 \r\n888  888 888 Y8b.        888 888  888 888  888 888    888  888  888 \r\n\"Y888888 888  \"Y8888     888 \"Y888888 888  888 888    888  888  888 \r\n                         888                                        \r\n                        d88P                                        \r\n                      888P\"                                         ');
console.log('\r\n%c#####################################################\r\n##  \u2022 JAVASCRIPT BASICS EXERCISES CABerlin 2022 \u2022  ##\r\n#####################################################\r\n', style);

//TODO Writing expressions with variables
console.log("%c\r\n|--> Writing expressions with variables <--|\r\n", style2);

//? EXERCISE 1
console.log("//* In your JavaScript file create a variable called myName with your name as the value. Put your name inside string quotes, e.g., 'my name'. Then add a line of code to print the variable name to the console after the previous message. Save your JavaScript file in your editor. Reload the HTML page in your browser. You should see your name printed. If not, investigate and fix it.\r\n\r\n");

let myName = "Ale";
document.getElementById("myName").innerHTML = myName;
console.log("Ex 1: "+myName);



//? EXERCISE 2
console.log("\r\n//* Create a variable called age with a number that is your age. Do not use string quotes for numbers. Add a line to print that variable in the console. Save the file and reload the page. You should see your name and your age.\r\n\r\n");

let age = 36;
document.getElementById("age").innerHTML = age;
console.log("Ex 2: "+age);



//? EXERCISE 3
console.log("\r\n//* Create a variable called juliaAge with a value 32. Create another variable called ageDiff and set it to an expression that calculates your age minus Julias's age. Print the value of ageDiff. Save the file and reload the page. You should see your age and the age difference. If you are younger than Julia, you should see a negative number.\r\n\r\n");

let juliaAge = 1;
let ageDiff = juliaAge - age;
document.getElementById("ageDiff").innerHTML=ageDiff;
console.log("Ex 3: "+ageDiff);



//TODO Writing code with conditionals
console.log("%c\r\n|--> WRITING CODE WITH CONDITIONALS <--|\r\n", style2);

//? EXERCISE 4
console.log("//* Write a conditional that compares the variable with your age with the number 21. It should print either 'You are older than 21' or 'You are not older than 21', appropriately, depending on your age. Save your JavaScript file and reload the page. Make sure you see the correct message. Try changing your age in the JavaScript file to make sure the other message prints when it should.\r\n\r\n");

let number21 = 21;
if (age > number21) {
    document.getElementById("number21").innerHTML="older than "+number21;
    console.log("Ex 4: You are older than "+number21);
} else {
    document.getElementById("number21").innerHTML="not older than "+ number21;
    console.log("Ex 4: You are not older than "+number21);
}


//? EXERCISE 5
console.log("\r\n//*Write a conditional that compares your age with Julia's age. This conditional will need to test if you are older, younger, or the same age, and print, appropriately, either 'Julia is older than you', Julia is younger than you', or 'You have the same age as Julia'. Save your changes and reload the file.\r\n\r\n");

if (juliaAge == age) {
    document.getElementById("compareJulia").innerHTML="You have the same age as Julia"
    console.log("Ex 5: You have the same age as Julia");
} else if (juliaAge > age) {
    document.getElementById("compareJulia").innerHTML="Julia is older than you"
    console.log("Ex 5: Julia is older than you");
} else if (juliaAge < age ) {
    document.getElementById("compareJulia").innerHTML="Julia is younger than you"
    console.log("Ex 5: Julia is younger than you");
}


//! JavaScript Array: 

//TODO Sorting an Array
console.log("%c\r\n|--> SORTING AN ARRAY <--|\r\n", style2); 

//? EXERCISE 1
console.log("//* Create an array with all the names of your class (including mentors). Sort the array alphabetically. Then print the first element of the array in the console. On the next line, print the last element of the array in the console. On the next line, print all the elements of the array in the console (use a 'for' loop). Save the file and reload the page. You should see the first element of the sorted array, the last element of the sorted array, and a list of all the elements in order in the array in the console.\r\n\r\n");

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
console.log("+ Alphabetically: "+quokkas.sort());
document.getElementById("sortArr1").innerHTML=quokkas;
//console.log(quokkas.reverse());

//Print the first element of the array in the console
console.log("+ First element: "+quokkas[0]);
document.getElementById("sortArr2").innerHTML=quokkas[0];

//Print the last element of the array in the console.
let lastQuokkas = quokkas.at(-1)
console.log("+ Last using .at(-1): "+lastQuokkas);
document.getElementById("sortArr3").innerHTML=lastQuokkas;
console.log("+ Last using .slice(-1): "+quokkas.slice(-1));
document.getElementById("sortArr4").innerHTML=quokkas.slice(-1);

//Print all the elements of the array in the console (use a "for" loop)
console.log("-------------------");
for (let i = 0; i < quokkas.length; i++) {
    console.log("+ Print all with for loop (Pos "+i+"): "+quokkas[i]);
    document.getElementById("sortArr5").innerHTML=quokkas[i];
}

// for (let a of quokkas) {
//     console.log(a);
// }


//TODO Looping over an Array
console.log("%c\r\n|--> LOOPING OVER AN ARRAY <--|\r\n", style2);

//? EXERCISE 2
console.log("//* Create an array with all the ages of the students in your class. Iterate the array using a while loop, and then print every age in the console. Add a conditional inside the while loop to only print even numbers. Write again a loop but use a 'for' loop instead of a 'while' loop. Save your changes to your JavaScript file. Reload the HTML page in your browser. You should see every age printed, then only the even numbers printed. If not, investigate and fix it.\r\n\r\n");

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
    console.log("Ex 2: While: "+quokkasAge[i]);
    i++;
}

//* Add a conditional inside the while loop to only print even numbers. 
let b = 0;
while(b < quokkasAge.length ) {
    if (quokkasAge[b] % 2 == 0){
        console.log("Ex 2: While even: "+quokkasAge[b]);
    }
    b++;
}

//* Write again a loop but use a "for" loop instead of a "while" loop.
let a = 0;
for (let a = 0; a < quokkasAge.length; a++) {
    console.log("Ex 2: For: "+quokkasAge[a]); 
}


//TODO Functions that use Arrays
console.log("%c\r\n|--> FUNCTIONS THAT USE ARRAYS <--|\r\n", style2);


//? EXERCISE 3 & 4
console.log("//* Write a function that receives an array as a parameter and prints the LOWEST & BIGGEST number in the array to the console. Save the changes to your JavaScript file. Reload the HTML page in your browser. You should see the lowest number in the array printed in the console. If not, investigate and fix it.\r\n\r\n");

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
    console.log("Ex 3: Unsorted: "+parameter);
    parameter.sort(function(a,b) { return a - b } );
    console.log("Ex 3: Sorted: "+parameter);
    let min = 0;
    let max = parameter.length-1;
    console.log("Ex 3: The lowest: "+parameter[min]);
    console.log("Ex 4: The biggest: "+parameter[max]);
}
theLowest(myArr);


//? EXERCISE 5
console.log("\r\n//* Write a function that receives two parameters, an array, and an index. The function will print the value of the element at the given position (one-based) to the console. For example, given the following array and index, the function will print '6'. var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]; var index = 1; Save the changes to your JavaScript file and check your browser console. You should see the number at the correct index printed in the console. If not, investigate and fix it.\r\n\r\n");

var myArr2 = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
var index = 15;

function valuePosition(p1, p2) {
    console.log("Ex 5: The number: " +p1[p2]+ " is in the position " +[p2] );
}
valuePosition(myArr2, index);


//? EXERCISE 6
console.log("\r\n//* Write a function that receives an array and only prints the values that repeat. For example, given the following array and index, the function will print '6,23,33,100'. var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]; Save the changes to your JavaScript file. Reload the HTML page in your browser. You should see an array of the repeated numbers printed in the console. If not, investigate and fix it.\r\n\r\n");

var myArr3 = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];

function repeatedNumber(p) {
    console.log("Ex 5: Recurring numbers: " +myArr3.filter((a,b,c) => c.indexOf(a) !== b));
}

repeatedNumber(myArr3);



//? EXERCISE 7
console.log("\r\n//* Write a simple JavaScript function to join all elements of the following array into a string. myColor = ['Red', 'Green', 'White', 'Black']; Save the changes to your JavaScript file. Reload the HTML page in your browser. You should see the following in your console: 'Red', 'Green', 'White', 'Black'. If not, investigate and fix it.\r\n\r\n");

let myColor = ["Red", "Green", "White", "Black"];

function fromArrayToString(p) {
    console.log("Ex 7: "+myColor);
    let colors = p.toString();
    console.log("Ex 7: "+colors);
}
fromArrayToString(myColor);


//TODO JavaScript String:
console.log("%c\r\n|--> JAVASCRIPT STRING <--|\r\n", style2);

//? EXERCISE 1
console.log("//* Write a JavaScript function that reverses a number. For example, if x = 32443 then the output should be 34423. Save your JavaScript file and reload the page. Make sure you see the correct output. If not, investigate and fix it.\r\n\r\n");

let initialNum = 32443; 

function toReverse(p) {

    //! Convert the numbers (Array) to a String
    let stringNum = p.toString();
    console.log("Ex 1: Converted to String: " +stringNum);

    //! Convert the numbers to an Array
    let arrayNum = stringNum.split('');
    console.log("Ex 1: Converted to an Array: " +arrayNum);

    //! Reverse the number of the Array
    let reverseNum = arrayNum.reverse();
    console.log("Ex 1: Inverted Array: " +reverseNum);

    //! Joins all elements of an Array to a String
    let finalNum = reverseNum.join('')
    console.log("Ex 1: Final reversed String: " +finalNum);

    //! All in one line 
    let allInOne = 32443;
    let result = allInOne.toString().split("").reverse().join("")
    console.log("Ex 1: All in one line: " +result);
}

toReverse(initialNum);


//? EXERCISE 2
console.log("\r\n//* Write a JavaScript function that returns a string in alphabetical order. For example, if x = 'webmaster' then the output should be 'abeemrstw'. Punctuation and numbers aren't passed in the string. Save your JavaScript file and reload the page. Make sure you see the correct output. If not, investigate and fix it.\r\n\r\n");

let myAlphabet = "webmaster"

function alphaOrder(parameter){

    console.log("Ex 2: "+myAlphabet);

    //! Convert the String to an Array
    let myAlphabetArr = parameter.split('');
    console.log("Ex 2: String to an Array: " +myAlphabetArr);
    
    //! Sort the Array
    myAlphabetArr.sort();
    console.log("Ex 2: Sort the Array " +myAlphabetArr);
    
    //! Joins all elements of an array  into a string
    let myAlphabetArrPrinted = myAlphabetArr.join("");
    console.log("Ex 2: String alphabetically sorted: " +myAlphabetArrPrinted);

}
alphaOrder(myAlphabet);


//? EXERCISE 3
console.log("\r\n//* Write a JavaScript function that converts the first letter of every word to uppercase. For example, if x = 'prince of persia' then the output should be 'Prince Of Persia'. Save your JavaScript file and reload the page. Make sure you see the correct output. If not, investigate and fix it.\r\n\r\n");

let myPrince= "prince of persia"

function firstLetterUppercase (parameter) {
    // let myPrinceWords = myPrince.split('');
    let myPrinceWords = parameter.split(" ");
    console.log("Ex 3: "+myPrinceWords);
}

firstLetterUppercase(myPrince)


//? EXERCISE 4
console.log("\r\n//* Write a JavaScript function that finds the longest word in a phrase. For example, if x = 'Web Development Tutorial', then the output should be 'Development'. Save your JavaScript file and reload the page. Make sure you see the correct output. If not, investigate and fix it.\r\n\r\n");
let myWeb = "Web Development Tutorial"; 

function myBiggestWord(parameter) {

    let myBiggest = parameter.split(" ");
    let myBiggestSorted = myBiggest.sort();
    let firstPos = 0;
    console.log("Ex 3: "+myBiggestSorted[firstPos]);
}

myBiggestWord(myWeb);


//TODO DOM Manipulation
console.log("%c\r\n|--> DOM MANIPULATION <--|\r\n", style2);

//? EXERCISE 1
console.log("//* Now let's add content to an HTML document instead of writing to the console. Write a function called addBands myBandList) that will list your favorite bands. Start with an empty HTML page that contains a level 1 heading 'My Favorite Bands' and an empty unordered list with ID band-list. Your function should use the JavaScript DOM to create list items and add them to the unordered list, with one list item for each string in array myBandList. For example, if I call: addBands(['Dire Straits', 'Kansas', 'Steely Dan']); The function will add three list items to the unordered list..\r\n\r\n");

let myBandList = ['Dire Straits', 'Kansas', 'Steely Dan'];

function addBands(parameter) {

    let ul = document.getElementById("band-list");

    for (let i=0; i < parameter.length; i++) {
        let bandName = parameter[i];
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(bandName));
        ul.appendChild(li);
    }
    console.log("Ex 1: "+parameter);
}

addBands(myBandList);


//? EXERCISE 2
console.log("\r\n//* Write a function called addMultTable(rows, cols) that will create a multiplication table like this. Start with an empty HTML page that only contains a level 1 heading. Your function should use the JavaScript DOM to insert an HTML table after the heading.For example, if I call: addMultTable(4, 8); It will create an HTML table with 4 rows and 8 columns, and append it after the level 1 heading.\r\n\r\n");

let cells = 8; // Columnas
let rows = 4; // Celdas


function addMultTable(cells, rows) {
    var table = document.getElementById("myTable");
    var header = table.createTHead();
    var body = table.createTBody();

    for (let index = 0; index < 1; index++) {
        var row = header.insertRow(0);
        for (let index = 0; index < rows; index++) {
            var cell = row.insertCell(0);
            cell.innerHTML = "<th>Head</th>";
        }
    }

    for (let index = 0; index < cells; index++) {
        var row = body.insertRow(0);
        for (let index = 0; index < rows; index++) {
            var cell = row.insertCell(0);
            cell.innerHTML = "Cell";
        }
    }
}

addMultTable(cells, rows);


