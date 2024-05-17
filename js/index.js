console.log(2 - 2); //0
console.log("2" - "2"); //0
console.log("2" - 2); //0
console.log(2 - "2"); //0
console.log("A" - "A"); //NaN
console.log("a" - 1); //NaN

console.log(2 + 2); //4
console.log("2" + 2); //22
console.log(2 + "2"); //22
console.log("2" + "2"); //22
console.log("a" + "1"); //a1
console.log("a" + "a"); //aa

// Javascript + operator behaves as,

//     number operator when both operands are number
//     concat operator if any one or both of the operands are string.

// Javascript -{minus} operator always behaves as number operator. if any one or both of the operands are string, Javascript attempts to convert it to a number, if not able to convert then return NaN.

let arr = [1, 2, 3, 4, 5, 6];

arr.forEach((ele) => {
  console.log(ele);

  if (ele == 2) {
    // break;
    console.log(ele);
  }
});

// Uncaught SyntaxError: Illegal break statement
// Uncaught SyntaxError: Illegal continue statement
// There is no way to stop or break a forEach loop other than throwing an exception. If you need such behavior, the forEach method is the wrong tool. Early termination may be accomplished with:

var foo = 2;

function one() {
  console.log(foo);

  var foo = 10;
}

one();
// Have you guessed foo = 1 or foo = 2?
// It’s neither one of them. It will print undefined. Here is the explanation,
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
// Let’s see how it is interpreted by the compiler in hoisting process,

for (let i = 0; i < 100; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

// output - 0,1,2

for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}

// output - 3,3,3



// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
//     - 4 > 3 true
//     - 4 >= 3 true
//     - 4 < 3 false
//     - 4 <= 3 false
//     - 4 == 4 true
//     - 4 === 4 true
//     - 4 != 4 false
//     - 4 !== 4 false
//     - 4 != '4' false
//     - 4 == '4' true
//     - 4 === '4' false
//     - Find the length of python and jargon and make a falsy comparison statement.

console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != "4");
console.log(4 == "4");
console.log(4 === "4");


// 04. Declare a varibale and assign string value to it and check if the string contains a word Script using includes() method.

let str = "Hello my name is Jagdish";

console.log(str.includes("Jagdish"));
console.log(str.includes("jagdish"));

// 13. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let age = prompt("Enter your age");

if (age >= 18) {
  console.log("you are old enough to drive");
} else {
  console.log(`${18 - age} years he need to turn 18`);
}

// Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.

const getFileExtension = (fileName) => {
  const fileNameArray = fileName.split(".");
  const fileExtension = fileNameArray[fileNameArray.length - 1];

  console.log(fileExtension);
};

getFileExtension("example.java"); // prints "txt" in the console


// Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.

function addition(a, b) {
  return a + b;
}

function substraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}



// 22. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age
let sortArr = ages.sort(function (a, b) {
  return a - b;
});

console.log("maximum age : ", ages[ages.length - 1]);
console.log("minimum age : ", ages[0]);

// Find the median age(one middle item or two middle items divided by two)

let sum = 0;
for (let i = 0; i < ages.length; i++) {
  sum += ages[i];
}

console.log(sum / 2);

// - Find the average age(all items divided by number of items)
console.log(sum / ages.length);


// 24. Write a program to create two array "even" and "odd" having even and odd number between the 0 to 100 (0 and 100 included).

let odd = [];
let even = [];

for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    even.push(i);
  } else {
    odd.push(i);
  }
}

console.log(odd);
console.log(even);



// 20. In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of your shopping cart if it has not been already added
//     - remove 'Honey'
//     - modify Tea to 'Green Tea'

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

shoppingCart.unshift("Meat");
console.log(shoppingCart);

shoppingCart.push("sugar");
console.log(shoppingCart);

for (let i = 0; i < shoppingCart.length; i++) {
  if (shoppingCart[i] == "Honey") {
    shoppingCart.pop();
  }
  if (shoppingCart[i] == "Tea") {
    shoppingCart[i] = "Green Tea";
  }
}

console.log(shoppingCart);


//  Write a program to create two array "even" and "odd" having even and odd number between the 0 to 100 (0 and 100 included).

let odd = [];
let even = [];

for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    even.push(i);
  } else {
    odd.push(i);
  }
}

console.log(odd);
console.log(even);


// Write a program to print all the prime number between 0 to 100 (0 and 100 included).
let n = 100;

for (let i = 0; i <= n; i++) {
  let count = 0;
  for (let j = 0; j <= i; j++) {
    if (i % j == 0) {
      count++;
    }
  }

  if (count == 2) {
    console.log(i);
  }
}
// Create a variable.js file and declare variables and assign string, boolean, undefined and null data types, Display all the value with their data type.

let str = "Jagdish";
let isHuman = true;
let value = undefined;
let type = null;
let age = 21;

console.log("datatype : ", typeof str, ", value : ", str);
console.log("datatype : ", typeof isHuman, ", value : ", isHuman);
console.log("datatype : ", typeof value, ", value : ", value);
console.log("datatype : ", typeof type, ", value : ", type);
console.log("datatype : ", typeof age, ", value : ", age);
console.log(
  'hello'
);


// 12. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

let date = new Date();

let day = date.getDay();
let mon = date.getMonth();
let year = date.getFullYear();
let hour = date.getHours();
let min = date.getMinutes();

console.log(`${year}-${mon + 1}-${day} ${hour}:${min}`);
console.log(`${day}-${mon}-${year} ${hour}:${min}`);
console.log(`${day}/${mon}/${year} ${hour}:${min}`);
