// Problem 1: Check if a number is Even or Odd

function checkOddEven(number){
    if(number % 2 === 0){
        return 'Even number';
    }
    else{
        return 'Odd number';
    }
}

const value = checkOddEven(10);
console.log(value);