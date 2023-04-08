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
let aleAge = 37
let ageDiff = juliaAge - aleAge
document.getElementById("ageDiff").innerHTML = ageDiff;
console.log("Ex3: age diff " + ageDiff)

//4
let theAge = 21
let myAge2 = 33

if (theAge < myAge2) {
	console.log("Your are older than 21")
} else {
	console.log("Your are youngest than 21")
}