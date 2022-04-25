console.log("Starting Javascript...");


// ex1
var myName = "myName Ale"
console.log(myName);

// ex2
var myAge = 36
console.log("myAge " + myAge);

// ex3
var juliaAge = 21
var ageDiff = myAge - juliaAge;

console.log("ageDiff " + ageDiff);

// ex4


if (juliaAge < myAge) {
    console.log("You are older than " + juliaAge);
} else if (juliaAge == myAge) {
    console.log("You have same age ");
} else {
    console.log("You are not older than " + juliaAge);
}



// Sorting Array

// ex1

// Create an array with all the names of your class (including mentors). Sort the array alphabetically. Then print the first element of the array in the console. On the next line, print the last element of the array in the console. On the next line, print all the elements of the array in the console (use a "for" loop). Save the file and reload the page. You should see the first element of the sorted array, the last element of the sorted array, and a list of all the elements in order in the array in the console.

let myClass = [
    "Marta",
    "Arno",
    "John",
    "Kat",
    "Otavia",
    "Raul", 
    "Angelina"
]
console.log(myClass.sort());

for (let i = 0; i < myClass.length; i++) {
}
console.log("First element: " + myClass[0]);
console.log("Last Element: " + myClass[myClass.length - 1]);


// Loop over an Array

// ex2

let classAges = [1, 12, 21, 32, 43, 54, 65, 76, 86, 98, 100]

let i = 0;

while (i < classAges.length) { // mientras recorremos el array
    // console.log("All: " + classAges[i]);
    if (classAges[i] % 2 == 0) {  // si se cumple esta condición
        console.log("With While: " + classAges[i]);   // ejecutamos la acción
    }
    i++; // en cada vuelta del bucle incrementamos el contador i
}

let b = 0;

do {
    if (classAges[b] % 2 == 0) { // si el número en el array es divisible por 2 y su resto es igual a cero (el mod % devuelve el resto de la división, numero par 0, impar 1) 
        console.log("With DO While: " + classAges[b]);
    }
    b++;
}
while (b < classAges.length)


for (let i = 0; i < classAges.length; i++) { // un loop for que recorre el array y se incrementa en cada vuelta
    if (classAges[i] % 2 == 0) {
        console.log("With For: " + classAges[i]);   
    }  
}


// Functions that use Arrays

// ex3

let theNumbs = [54, 4, 21, 32, 43, 54, 65, 76, 86, 98, 100, 137]

let minNum = theNumbs[0] // declaro una variable para iniciar la comparación desde la posición 0
function theLowest(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < minNum) { // si se cumple la condición comparanto ambas variables
            minNum = array[i] //la guardo en minNum
        }
    }
    return minNum // devuelvo resultado
}
console.log(theLowest(theNumbs)); // imprimo la función y pasando un array



// ex 4
let maxNum = theNumbs[0]
function theBiggest(array) {

    for (let i = 0; i < array.length; i++) {
        if (array[i] > maxNum) {  // igual a lo de arriba, en este caso usamos el operador mayor que
            maxNum = array[i]
        }
    }
    return maxNum
}
console.log(theBiggest(theNumbs));

// ex5


array = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
var index = 1


function arrayPosition(array, index) {  // declaro función que recibe un array e index
        return array[index]; // devuelvo el resultado
}

console.log(arrayPosition(array, index)); // imprimo la función y pasando un array y su index



// ex 6

// Write a function that receives an array and only prints the values that repeat.For example, given the following array and index, the function will print '6,23,33,100'.var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];Save the changes to your JavaScript file. Reload the HTML page in your browser. You should see an array of the repeated numbers printed in the console. If not, investigate and fix it.Tip: this is considered by many students the most difficult exercise, therefore dedicate max. an hour to find a solution and if you can't leave it for tomorrow. Most of the time we need to take breaks and we will be able to see problems from different angles with a fresh mind.


var numberList = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]

function repeatedNumb(array) {
    let repeatedValue = []; // nuevo array vacio
    for (let i = 0; i < array.length; i++) { //recorro el bucle
        for (let x = i + 1; x < array.length; x++) { // recorro el bucle +1 para comparar un número y otro
            if (array[i] == array[x]) { //una condición de que si el 
                repeatedValue.push(array[i]); //con push() voy añadiendo 
            }
        }
    }
    return repeatedValue;
}
console.log(repeatedNumb(numberList));




// Exercise 7
// Write a simple JavaScript function to join all elements of the following array into a string. myColor = ["Red", "Green", "White", "Black"]; Save the changes to your JavaScript file. Reload the HTML page in your browser. You should see the following in your console: "Red", "Green", "White", "Black" If not, investigate and fix it.

// let myColor = ["Red", "Green", "White", "Black"]
// let str = ""

// function arrayToString(array) {

//     for (let i = 0; i < array.length ; i++) {
//         str += array[i] + ", "
//     }
//     return str
// }
// console.log(arrayToString(myColor))

console.log("---------------------------");

let myColor = ["Red", "Green", "White", "Black"];

function arrayToString(array) {
    let theString = "";
    let theString2 = "";
    for (let i = 0; array.length > i; i++) {
        // theString += array[i] + ", "; // uso el += de addición al contenido existente en la variable (así añade una coma al final)
        theString2 = array.join(", "); // con join añadimos una coma a cada elemento pero no añade coma al final
    }
    // console.log(theString);
    console.log(theString2);
}
arrayToString(myColor);


// Javascript Strings

// ex 1

var number = 123456789

function reverseNumber(parameter) {
    output = []
    sNumber = parameter.toString();
    for (var i = 0; i < sNumber.length; i++) {
        // output.push(+sNumber.charAt(i))
        output.push(sNumber.charAt(i));
    }
    parameter = output.reverse()
    let final = parameter.join("")
    return  final
}
console.log(reverseNumber(number)); 

// ex 2
// Write a JavaScript function that returns a string in alphabetical order. For example, if x = 'webmaster' then the output should be 'abeemrstw'. Punctuation and numbers aren't passed in the string. Save your JavaScript file and reload the page. Make sure you see the correct output. If not, investigate and fix it.

let myWord = 'webmaster'

function reverseWord(parameter) {
    let output2 = []
    myReverse = parameter.toString();
    for (var i = 0; i < parameter.length; i++) {
        output2.push(parameter.charAt(i));
    }
    // myReverse = output2.reverse().toString(); 
    parameter = output2.reverse()
    let final = parameter.join("")
    return  final
}
console.log(reverseWord(myWord)); 



let thePrince = "prince of persia"

function prince(parameter) {
    let output = []
    let first = []

    for (var i = 0; i < parameter.length; i++) {
    }

}
prince(thePrince)



// let thePrince = "prince of persia"

// function prince(parameter) {
//     let output = []
//     let first = []
//     let counter = 0;
//     for (let i = 0; i < parameter.length; i++) {
//         if (parameter[i] == "' '") {
//                 console.log("PASAAAAAAAAAAAAAA");
//             } else {
//                 console.log("NO PASA");
//             }
//         output.push(parameter.charAt(i))
//         console.log(output);
//         first = parameter[0].toUpperCase();
//         console.log(first);
//         output[0] = first
        

//         // console.log(output[i]);
//         // b++
//         console.log(counter);
//     }
//     // console.log(first);
//     console.log(output);

// }

// prince(thePrince)




            // if (parameter[i] == " ") {
            //     // console.log("PASA");
            //     first = parameter[i].toUpperCase();
            //     console.log("soy i " +i);
            //     // console.log("B "+b);
            //     console.log("soyi " +i);
            //     let c = b
            //     console.log("B "+b);
            //     console.log("C " + c);

            //     parameter[c] = "Z"

            
            //     // b++
            //     // output[i] = first
            //     // console.log(output[b]);
                
                
            // } else {
            //     // console.log("NO PASA");" "
            // }