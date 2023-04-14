//TODO Writing expressions with letiables
console.log("|--> Writing expressions with letiables <--|")

//1
let myName = "Ale"
document.getElementById("myName").innerHTML = myName
console.log("Ex 1: " + myName)

//2
let myAge = 37
document.getElementById("myAge").innerHTML = myAge
console.log("Ex 2: " + myAge)

//3
let juliaAge = 50
let aleAge = 39
let ageDiff = juliaAge - aleAge
document.getElementById("ageDiff").innerHTML = ageDiff
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
	// document.getElementById("loopElements").innerHTML = family.slice(-1)
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
let numArray = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100]
let index = 1

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
// let repeatedNum = []

// function myRepeat(array) {
// 	for (let i = 0; i < array.length; i++) {
// 		if (repeatedNum[i] != array[i]) {
// 			repeatedNum[i] = array[i]
// 			console.log(repeatedNum)
// 		}
// 	}
// }
// console.log(myRepeat(numArray))


//12
let myColor = ["Red", "Green", "White", "Black"]
let string = ""
function arrayToString(array) {
	for (let i = 0; i < array.length; i++) {
		if (i !== array.length - 1) {
			string += "'" + array[i] + "',"
		} else {
			string += "'" + array[i] + "'"
		}
	}
	return string
}
console.log(arrayToString(myColor))



//13
let x = "32443"
let newString = ""
function reverseNumber(parameter) {
	console.log(parameter.length)
	for (let i = parameter.length - 1; i >= 0; i--) {
		newString += parameter[i]
	}
	return newString
}
console.log(reverseNumber(x))


//14
let y = "webmaster"
function alphabet(parameter) {
	return parameter.split("").sort().join("")
}
console.log(alphabet(y))

//15
//Write a JavaScript function that converts the first letter of every word to uppercase.For example, if x = "prince of persia" then the output should be "Prince Of Persia".Save your JavaScript file and reload the page.

let prince = "prince of persia"

function princeUppercase(parameter) {
	let result = ""
	result = parameter.split("")
	result[0] = parameter[0].toUpperCase()
	for (let i = 0; i < result.length; i++) {
		if (result[i] === " ") {
			result[i + 1] = parameter[i + 1].toUpperCase()
		}
	}
	parameter = result.join("")
	return parameter
}
console.log(princeUppercase(prince))


//16
let longest = "Web Development Tutorial"

function longWord(parameter) {
	let longestWord = ""
	let longestArray = parameter.split(" ")
	for (let i = 0; i < longestArray.length; i++) {
		if (longestWord.length < longestArray[i].length) {
			longestWord = longestArray[i]
		}
	}
	return longestWord
}
console.log(longWord(longest))



//17
//Now let's add content to an HTML document instead of writing to the console. Write a function called myBandList() that will list your favorite bands. Start with an empty HTML page that contains a level 1 heading "My Favorite Bands" and an empty unordered list with ID band-list.

// Your function should use the JavaScript DOM to create li elements and add them to the unordered list, with each li element being a string in an array.

// For example, if I call:

// myBandList(['Dire Straits', 'Kansas', 'Steely Dan']);

// The function will add three list items to the unordered list.



let myBandList = ['Dire Straits', 'Kansas', 'Steely Dan'];

function addBands(array) {
	let ul = document.getElementById("band-list");
	for (let i = 0; i < array.length; i++) {
		let bandName = array[i];
		let li = document.createElement('li');
		li.appendChild(document.createTextNode(bandName));
		ul.appendChild(li);
	}
}

addBands(myBandList);