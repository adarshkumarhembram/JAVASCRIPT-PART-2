// section 1 let var and const


// 1 -> block and functional scope

if(true){
    // let a =2;   ->reference error
    // var a=2;
}
// console.log(a);

function b(){
    if(true) {
        var b=8;
    }
    // console.log(b);
}
// b();


// let a=45;
{
    let a=98;
}

// console.log(a);

// what is the output and why??

// let a=100;
function App(){
    console.log("1",a);
    let a = 42;
    console.log("2",a);
    {
        let a =100;
    }
    console.log("3",a);
}

// not get output because it is refrence error

// another example

// let a=76;
function App(){
     let a=54;
    console.log("1 ",a);
}

// App()


// temporal dead zone
function Something(){
    console.log(a);
    a=9;
}

// Something()


// hoisting

function hos(){
    console.log(a);
    var a=6;
}
// hos()

//  const vs Var

var k=7;
k=9;
// console.log(k);

// const a=9;
// a=8;
// console.log(a);

// const with Array
 const f=[2,3,4,5,]
 f=[3.2,4]
//  console.log(f);  error



// Arrow Function
// const num = ()=>2;

// function nameOfFunction(argument1,argument2) {
//     var toreturn = 42;
//     return toreturn;
// }
// nameOfFunction(3,4)


// how would u write this with the least amount of character

function Add2return(num){
    let sum=0;
    sum= num+22;
    return sum;
}


// part 1
const addsum=(num)=>{
    let sum=0;
    sum=num+22;
    return sum;
}

// console.log(addsum(7));

// const addsum = (num) => {
//     let sum = 0;
//     sum = num + 22;
//     return sum;
// };

// console.log(addsum(5));

// Part 2
const addf=num=>{
    let sum=0;
    sum = num+7;
    return sum;
}

// console.log(addf(8));
// part 3
const adreturn =num=>{
    return num+22;
}
console.log(adreturn(6));
