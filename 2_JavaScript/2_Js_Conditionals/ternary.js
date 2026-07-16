const age = 24;

if(age >= 18){
    console.log('Please vote');
}
else{
    console.log('grow up kid');
}

// Ternary Operator: condition? if_true : if_false

const age1 = 28
age1 >= 22 ? console.log('your age is'+ age1 + 'so please vote') : console.log("can't vote")

age1 >= 22 ? console.log('your age is', age1 , 'so please vote') : console.log("can't vote")

// comma(,) means --> autometically space before and after
// plus(+) means --> no space between before and after

let price = 500;
let isLeader = true;

price = isLeader ? 0 : price + 100;
console.log('Price now:', price);

const number = -1000;
const name = '';
if(!!name){  // that means false true false = false and it convert boolean value
    console.log('number is truthy');
}
