//TODO Writing expressions with variables
console.log("|--> Writing expressions with variables <--|");

//1
let myName = "Ale";
document.getElementById("myName").innerHTML = myName;
console.log("Ex 1: " + myName);

//2
let myAge = 37;
document.getElementById("myAge").innerHTML = myAge;
console.log("Ex 2: " + myAge)

//3
let juliaAge = 50
let aleAge = 39
let ageDiff = juliaAge - aleAge
document.getElementById("ageDiff").innerHTML = ageDiff;
console.log("Ex3: age diff " + ageDiff)

//4
let theAge = 21
let queloque = ""
if (theAge < myAge) {
	let queloque = "older"
	document.getElementById("queloque").innerHTML = queloque
	console.log("4: You are " + queloque + " than 21")
} else {
	let queloque = "younger"
	document.getElementById("queloque").innerHTML = queloque
	console.log("4: You are " + queloque + " than 21")
}

//5
if (juliaAge == myAge) {
	document.getElementById("compareJulia").innerHTML = "You have same age as Julia"
	console.log("5: You have same age as Julia")
} else if (juliaAge < myAge) {
	document.getElementById("compareJulia").innerHTML = "You are older than Julia"
	console.log("5: You are older than Julia")
} else if (juliaAge > myAge) {
	document.getElementById("compareJulia").innerHTML = "You are younger than Julia"
	console.log("5: You are younger than Julia")
}

//6
let family = ["ale", "ceci", "rosita", "odam", "lester", "panchoti"]

let familyLength = family.length

document.getElementById("alphabetically").innerHTML = "Sort the array alphabetically: " + family.sort()
document.getElementById("firstElement").innerHTML = "First element array: " + family[0]
document.getElementById("lastElement").innerHTML = "Last element array: " + family[family.length - 1]

for (let i = 0; i < family.length; i++) {
	document.getElementById("loopElements").innerHTML = i + " " + family[i]
	// document.getElementById("loopElements").innerHTML = family.slice(-1);
	console.log("6 Loop " + i + ": " + family[i])
}

//7
let ages = [45, 34, 12, 89, 47, 71]

//Iterate the array using a while loop, and then print every age in the console.
let i = 0
console.log(ages.length)
while (i < ages.length) {
	console.log(ages[i])
	i++
}

//Add a conditional inside the while loop to only print even numbers.
let b = 0
while (b < ages.length) {
	if (ages[b] % 2 == 0) {
		console.log("Even: " + ages[b])
	}
	b++
}

//Write another a loop, but use a "for" loop instead of a "while" loop

for (let c = 0; c < ages.length; c++) {
	if (ages[c] % 2 == 0) {
		console.log("For Even: " + ages[c])
	}

}

//8
let myArray = [99, -4, 48, 67, 294, -99, 0, 32, -1]

function lowNum(array) {
	let myLow = array[0]
	for (let i = 0; i < array.length; i++) {
		if (array[i] < myLow) {
			myLow = array[i]
		}
	}
	return myLow
}
console.log(lowNum(myArray))


//9
function highNum(array) {
	let myHigh = array[0]
	for (let i = 0; i < array.length; i++) {
		if (array[i] > myHigh) {
			myHigh = array[i]
		}
	}
	return myHigh
}
console.log(highNum(myArray))


//10
var numArray = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100]
var index = 1

function myIndex(array, parameter) {
	for (let i = 0; i < array.length; i++) {
		if (parameter == i) {
			return array[i]
		} else if (parameter > array.length - 1) {
			console.log("Ese index no existe manito")
		}
	}
}
console.log("Index position: " + myIndex(numArray, 21))


//11

var repeatedNum = []

function myRepeat(array) {
	for (let i = 0; i < array.length; i++) {
		if (repeatedNum[i] != array[i]) {
			repeatedNum[i] = array[i]
			console.log(repeatedNum)
		}
	}
}
console.log(myRepeat(numArray))
