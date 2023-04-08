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
	console.log("6 Loop: " + family[i])

}
