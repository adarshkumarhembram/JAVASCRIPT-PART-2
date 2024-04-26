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
