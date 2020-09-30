console.log("hello");

//alert("hello this is cozy");

//How to write a comment inline

//Variables
var b = "smoothie";
console.log(b);

var someNumber = 45;

//console.log(someNumber);

//var age = prompt("What is your age?");

//document.getElementById("someText").innerHTML = age;

// Numbers in javasscript
var num1 = 10;

// Increment num1 by 1
num1++;

// Decrement num1 by 1
num1--;
console.log(num1);

// Divide, multiply *, remainder %
console.log(num1 % 5);

// Increment/decrement by 10
num1 += 10;
console.log(num1);

/* Functions
1. create a function
2. call the function
*/

// Create
function fun() {
  console.log("this is a function");
}

// Call
fun();

/* take in a name and says hello followed by your name

For example
Name: "Kei"
Return: "Hello Kei"
*/

function greeting(yourName) {
  var result = "Hello " + yourName;
  console.log(result);
}

//var name = prompt("What is your name?");
//greeting(name);

// How do arguments work in functions?
// How do we add 2 numberrs together in a function?

function sumNumbers(num1, num2) {
  var result = num1 + num2;
  console.log(num1 + num2);
}

sumNumbers(10, 10);

/* While loops

var num = 0;

while (num < 100) {
  num += 1;
  console.log(num);
}

*/

/* For loops
for (let num = 0; num <= 100; num++) {
  console.log(num);
}
*/

//Data types
let yourAge = 18; //number
let yourName = "Bob"; //string
let name = { first: "Jane", last: "Doe" }; //object
let truth = false; //boolean
let groceries = ["apple", "banana", "oranges"]; //array
let random; //undefined
let nothing = null; //value null

//Strings in Javascript (common methods)
let fruit = "banana";
let moreFruits = "banana\napple"; //new line

console.log(fruit.length);
console.log(fruit.indexOf("an"));
console.log(fruit.slice(2, 4));
console.log(fruit.replace("an", "123"));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(",")); //split by a comma
console.log(fruit.split("")); //split by a characters
