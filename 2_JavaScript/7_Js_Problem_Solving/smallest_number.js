// Problem 10: Find the smallest number in an Array

function largestNumber(number){
    let large = number[0];
    for(let i = 1; i<number.length; i++){
        if(large > number[i]){
            large = number[i];
        }
    }
    return large;
}

const values = [4, 9, 1, 8, 5];
const largeNumber = largestNumber(values);
console.log(largeNumber);