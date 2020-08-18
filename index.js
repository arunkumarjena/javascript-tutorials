// let firstName = 'Arun Kumar';

// let lastName = 'Jena';

// const fullName = firstName + ' ' + lastName;
// console.log(fullName);

// New
// const name = `${firstName}  ${lastName}`;
// console.log(name);

//  Program to find even odd
var a = 10;
if (a % 2 == 0) {
    console.log("Even number");
} else {
    console.log("Odd Number");
}

//  Using forLoop print number;

for (let number = 0; number <= 10; number++) {
    console.log(number);
}
//  Escape character in string
var myString = "I am a String\"hello";
console.log(myString);

var firstString = "I am first Sentence";
firstString += "I am second sentence";
console.log(firstString);
//  String concat
var myName = "Arun";
var fullSentence = "Hello my Name is " + myName + " I am 23 years old.";
console.log(fullSentence);

var firstWord = " worthWhile";
var secondWord = " Learning JavaScript";
secondWord += firstWord;
console.log(secondWord);

var lastNameLength = 0;
var lastName = "Jena";
lastNameLength = lastName.length;
console.log(lastNameLength);

var firstLetterOfFirstName = "";
var firstName = "Arun";
firstLetterOfFirstName = firstName[0];
console.log(firstLetterOfFirstName);

var firstLetterOfLastName = "";
firstLetterOfLastName = lastName[0];
console.log(firstLetterOfLastName);

firstLetterOfLastName = lastName[lastName.length - 2];
console.log(firstLetterOfLastName);
//  Word Blank(using function)
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "The " + myAdjective + myVerb + myAdverb + " to the store " + myAdverb;
    return result;
}
console.log(wordBlanks("dog", "big", "ran", "quickly"));

// Addition of number using function
function additionOfNumber(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}
console.log(additionOfNumber(10, 20));

// Store multiples values with Array
var ourArray = [
    ["The Universe", 2020],
    ["Everything", 1010]
];
// console.log(ourArray[1]);
// Using forEach
ourArray.forEach(element => {
    console.log(element);
});
ourArray.push(["White", "Red"]);
ourArray.pop(1);
ourArray.forEach(element1 => {
    console.log(element1);
});

var myArray = [
    ["Green", 24],
    ["WhiteBox", 45]
];

// shift removed firstElement of array
ourArray.shift();
console.log(ourArray);
//  replace firstElement from removed by shift
// Function
function ourReusableFunction() {
    console.log("Hello, World");
}
ourReusableFunction();
// Passing values to function
function functionWithArgs(a, b) {
    console.log("***** ADDITION *******");
    console.log(a + b);
}
functionWithArgs(40, 50);
// Global Function
var myGlobal = 10;

function fun1() {
    oopsGlobal = 5;
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();
// We can access variable var use inside function with only that this scope
// Example 
// function myLocalScope(){
//     var myVar = 5;
//     console.log(myVar);
// }
// myLocalScope();
// console.log(myVar);
var outerWear = "T-Shirt";

function myOutFit() {
    var outerWear = "sweater";

    return outerWear;
}
console.log(myOutFit());
console.log(outerWear);

console.log("*********************");

function additionOfTwoNumber(a1, b1) {
    return a1 + b1;
}
console.log("Sum is: " + additionOfNumber(10, 3));

var changed = 0;

function change(num) {
    return (num + 5) / 3;
}
changed = change(10);
console.log(changed);


var processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}
processed = processArg(7);
console.log(processed);
// Stand Line
function nextInLine(arr, item) {
    // Your code here
    arr.push(item);
    // return arr.shift();
    return arr.unshift(9);
}
var testArr = [1, 2, 3, 4, 5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
// Boolean Values
function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true";
    }
    return "No, it's false";
}
console.log(ourTrueOrFalse(false));

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true";
    }
}
console.log(trueOrFalse(true));
// Light Program
var lightOn = true;

function isLightOn(lightOn) {
    if (lightOn) {
        return "Turn ON Computer";
    }
    return "Turn Off";
}
console.log(isLightOn());

function isLightOff(switchOn) {
    if (switchOn) {
        return "Switch Off";
    }
    return "Switch ON";
}
isLightOff(false);
console.log(isLightOff());

// Equally Operator and StrictEqually Operator
function compareEqualityI(m, n) {
    if (m == n) {
        return "Equal";
    }
    return "Not Equal";
}
console.log(compareEqualityI(10, "10"));

// With StrictEqual Operator
function checkStrictEquality(p, q) {
    if (p === q) {
        return "Equal";
    }
    return "Not Equal";
}
console.log(checkStrictEquality(20, 30));