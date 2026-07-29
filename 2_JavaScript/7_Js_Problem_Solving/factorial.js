// Problem 3: Factorial of a number

function factorial(number){
    let fact = 1;
    for(let i = 1; i<=number; i++){
        fact = fact*i;
    }
    return fact;
}

const value = factorial(4);

console.log(value);