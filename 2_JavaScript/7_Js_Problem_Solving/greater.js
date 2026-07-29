// Problem 12: Filter numbers greater than a value

function largestNumber(array, number){
    let filter = [];
    for(let i = 0; i<array.length; i++){
        if(array[i] > number){
            filter.push(array[i]);
        }
    }
    return filter;
}

const values = [6, 9, 1, 8, 5, 3, 4];
const number = 4;
const filterNumber = largestNumber(values, number);
console.log(filterNumber);