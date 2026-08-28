// Programming Paradigm
// 1. Object Oriented Paradigm
// 2. Functional Paradigm


// Pure funcion
// 1. It returns the same result if given the same arguments
// 2. It does not cause any abservable side effect

function sqrt(a){
    return a * a;
}
console.log(sqrt(10));
console.log(sqrt(10));


// Impure function 
// 1. It changes the global arguments value
let value = 10;
function myFunc(){
    value += 5;
    return value;
}
console.log(myFunc());
console.log(myFunc());
console.log();

// First class function
function multiply(a, b){
    return a * b;
}
// 1. A function can be stored in a variable
let myMultiplyFunc = multiply;
console.log(myMultiplyFunc(10, 5));

// 2. A function can be stored in an array
let arr = [];
arr.push(multiply);
console.log(arr[0](10, 10));

// 3. A function can be stored in an object
let myObj = {multiply};
console.log(myObj.multiply(5, 5));

// 4. We can create function as we need
function myFunc2(){
    function myFunc3(){
        console.log("Inside myFunc3");
    }
    myFunc3();
}
myFunc2();


// Higher Order function
function sum2(a, b){
    return a + b;
}
function myFunc4(a, b, c, d, sum2){
    return function(){
        let sum = sum2(a, b);
        let multiply = sum * c * d;
        return multiply;
    }
}
let result = myFunc4(10, 20, 2, 5, sum2);
console.log(result());

// 1. A function can be stored in a variable
// 2. A function can be stored in an array
// 3. A function can be stored in an object
// 4. We can create function as we need
// 5. We can pass function as an arguments
// 6. We can return function from another function