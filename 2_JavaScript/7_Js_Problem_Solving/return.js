// Problem 14: Returns all even numbers then their sum

function evenArray(array){
    let evenNumbers = [];
    for(let i = 0; i<array.length; i++){
        if(array[i] % 2 === 0){
            evenNumbers.push(array[i]);
        }
    }
    return evenNumbers;
}

function getSum(filterArray){
    let sum = 0;
    for(let val of filterArray){
        sum += val;
    }
    return sum;
}

const values = [6, 9, 1, 8, 5, 3, 4];

const filterArray = evenArray(values);
const sumOfFilterArray = getSum(filterArray);

console.log('Even array', filterArray);
console.log('Sum of the even numbers of array',sumOfFilterArray);