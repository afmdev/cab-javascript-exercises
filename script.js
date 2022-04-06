// console.log("Hello World");

// // VARIABLES

// var myVarVariable = 10
// let myLetVariable = 20
// const myConstVariable = 30


// console.log(myVarVariable);
// console.log(myLetVariable);
// console.log(myConstVariable);


// var sumOfNum = 1 + 2

// console.log(sumOfNum)
// console.log('Suma de numeros', sumOfNum)
// console.log(myConstVariable + myVarVariable)

// TYPES OF VARIABLES


// let myNum = 1
// let myName = "Alejandro FM"
// let myBool = true
// let myBoolFalse = false
// let myArrayString = ["Hi", "there"]
// let myArrayNum = [1, 2, 3, 4, 5]
// let myArrayMix = [1, "ale", 2, "jandro", true]

// console.log(myArrayMix)

// console.log(myArrayMix[4])
// console.log(myArrayMix.indexOf(true))  //Method

// let quokkas = ["Angelina", "Arno", "Jess", "Karolina", "John", "Marta", "Ale"]

// console.log("Quokkas team are", quokkas)
// console.log(quokkas.indexOf("Karolina"))

// quokkas.push("Lea")
// console.log("Quokkas team are", quokkas)

// quokkas.pop()
// quokkas.reverse()
// console.log("Quokkas team are", quokkas)


// OBJECTS

// let myMac = {
//     keyboard: true,
//     color: "silver",
//     brand: "apple",
//     screen: 15,
//     ports: ["usb", "hdmi", "sd"]
// }

// let myWindows = {
//     keyboard: true,
//     color: "black",
//     brand: "windows",
//     screen: 15,
//     ports: ["usb", "hdmi", "sd"]
// }

// console.log(myMac)
// console.log(myWindows.color)

// let myLaptops = []
// myLaptops.push(myMac)
// myLaptops.push(myWindows)
// console.log(myLaptops)

// ESTUDIAR QUE ES LET, VAR O CONST


// COMPARISSON OPERATORS
// ==, ===, !=, !==, <, >, <=, >=

// CONDITIONAL STATEMENTS

// IF

// let myVar = 9
// let myVar2 = 9
// if (myVar == myVar2) {
//     console.log("it is equal")
// }


// let myVar3 = 9
// let myVar4 = "9"
// if (myVar3 == myVar4) {
//     console.log("it is equal")
// }

// if (1 < 2) {
//     console.log("it is equal")
// }

// if (1 < 2) {
//     console.log("it is equal")
// }

// let myNumber = 30

// if (myNumber == 40) {
//     console.log("you found the number")
// } else {
//     console.log("this is not my number")
// }


// let ale = 3

// if (ale == 3) {
//     console.log("you found the number")
// } else if (ale > 4) {
//     console.log("this is not my number")
// } else if (ale < 2) {
//     console.log("this is not my number")
// } else {
//     console.log("you downt know")
// }


let quokkas = ["Angelina", "Arno", "Jess", "Karolina", "John", "Marta", "Ale"]
let sizeQuokkas = quokkas.length

for (let i = 0; i < sizeQuokkas; i = i + 1) {
    console.log("For " + quokkas[i] + ",aaaaaaaaa" + " the position is " + i)
}


// // WHILE LOOP

// let x= 0;
// while (x < 5) {
//     console.log(x);
//     x++
// }


//
// JAVA SCRIPT FUNCTIONS
//

// function greetFunction() {
//     console.log("Hi There");
// }


// greetFunction()


// function greet2() {
//     console.log("Hi there, in the morning");
    
// }



// function greet3(msg) {
//     console.log(msg);
    
// }

// greet3("Ale")
// greet3("jandro")
// greet3("Francisco")
// greet3(56)


// function todaysMenu(first, second) {
// console.log("Today's menu is " +first+ " and" + second);    
// }

// todaysMenu("paella", "sopa")
// todaysMenu("ensalada", "crema")
// todaysMenu("lasagna", "pasta")
// todaysMenu("ice cream", "arroz")

// let first = "caviar"
// let second = "sopa"
// todaysMenu(second, first)


function sumOfTwoNumbers(a, b) {
    let result = a + b;
    // console.log(result)
        return result
}

let myResult = sumOfTwoNumbers(10, 55)
    console.log(myResult)



function costOfMenu(mainPrice, dessertPrice) {
    let result = mainPrice + dessertPrice;
    return result;
}

costOfMenu(10, 7)

let menuPrice = costOfMenu(10, 7)
console.log(menuPrice);

function restaurantBill(menuPrice) {
    let myMoney = 15

    if (menuPrice > myMoney) {
        console.log("No money");
    } else {
        console.log("Take my money and run");
    }
}

restaurantBill(menuPrice)




// let myFunction = (parameter) => {
//     //my code
// }