// Problem 11: Sum and Average of an Array

function largestNumber(number){
    let sum = 0;
    for(let i = 0; i<number.length; i++){
        sum += number[i];
    }
    const avg = sum / number.length;
    return avg;
}

const values = [4, 9, 1, 8, 5];
const avgNumber = largestNumber(values);
console.log(avgNumber);