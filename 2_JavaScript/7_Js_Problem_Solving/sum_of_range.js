// Problem 2: sum of range of numbers (1 to N)

function sumOfRange(number){
    let sum = 0;
    for(let i = 1; i<=number; i++){
        sum += i;
    }
    return sum;
}

const sum = sumOfRange(10);
console.log(sum);