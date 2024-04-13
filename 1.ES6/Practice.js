// 1. Write a function that takes a user's age and determines if they are old enough to vote (age 18 or older)

const isElegibleToVote = (age) =>{
    if (age>=18) {
        // console.log("Elegible to vote");
        return "Elegible to vote";                             
    } else {
        return "not elegible";
    }
}
// console.log(isElegibleToVote(90));


// 2. Write a function that takes two numbers as input and determines which one is greater.

const isGreater = (num1,num2) =>{
    if (num1>num2){
        return `${num1} is greater ${num2}`
    }else{
        return `${num2} is greater than ${num1}`
    }

}
// console.log(isGreater(2,5));

// 3. Write a function that takes a number as input and determines if it is positive or negative.

const checknum= (num1)=>{
    if(num1>=0){
        return "Positive number"
    }
    else return 'negative number'
}

// console.log(checknum(7));

// 4. Write a function that takes a number as input and determines if it is even or odd.

const isEvenOdd =(num1)=>{
    if(num1%2){
        return 'odd number'
    }
    else return "even number"
}
// console.log(isEvenOdd(5));

// 5. Write a function that takes a string as input and determines if it contains the letter 'a' or ‘A’

const checkForAlphabetA =(str)=>{
    const lowercaseStr = str;
    if(lowercaseStr.includes('a')){
        return "Includes a";

    }else return "Does not include a";

}

// console.log(checkForAlphabetA('hkjbujhe'));

// 6. Write a function that takes a string as input and determines if it is longer than 5 characters.

const checkLength = (string) =>{
    if(string.length>5){
        return "more than 5 character"
    }
    else return "Less than 5 character"
}

// console.log(checkLength('jsuh'));

// 7. Write a function that takes a number as input and determines if it is between 1 and 10.

const isBetweenOneAndTen = (num)=>{
 if(num<10){
    return "true"
 }
 else return "false";
}

// console.log(isBetweenOneAndTen(87));

// 8. Write a function that takes a string as input and determines if it contains the word "hello"

const ishellopresent = (string)=>{
    const lower = string;
    if(string.includes("hello")){
        return "true"
    }
    else return "false"

}
// console.log(ishellopresent("world"));
// console.log(ishellopresent("world hello"));



// 9. Write a function that takes a number as input and determines if it is a multiple of 3.

const isMultiplyOfthree =(num)=>{
    if(num%3){
        return "false"
    }
    else return "true"
}
// console.log(isMultiplyOfthree(5));
// console.log(isMultiplyOfthree(9));


//10. Write a function which takes in a number as input and returns it after multiplying by 10. 
const MultiplyBy10 =(num)=>{
    return (num*10);
}

// console.log(MultiplyBy10(20));
// console.log(MultiplyBy10(40));

//  11. Console individual values of the product object using object destructuring.
const product = {
    title: 'iPhone',
    price: 5999,
    description: 'The iPhone is a smartphone developed by Apple',
   }
// console.log(product.title);
// console.log(product.price);
// console.log(product.description);

// 12. Create an object book with properties title, author, and pages. Create a function getBookDetails
// that takes a book object as a parameter and returns if the book has more than 100 pages

