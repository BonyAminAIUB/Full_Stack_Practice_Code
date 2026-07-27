// Given an array of numbers, remove duplicates and log the unique values only.
let array1 = [1, 3, 0, 2, 3, 40, 5, 1];
array1 = [...new Set(array1)];
console.log(array1);

// Given an array of mixed values (numbers and strings), separate them into two arrays and log both.
const arrays = [1, 3, 'bony', 0, 'hey', 4, 5, 'amin', 1];
const numbers = [];
const strings = [];

for(const array of arrays){
    if(typeof(array) === 'number'){
        numbers.push(array);
    }
    else{
        strings.push(array);
    }
}
console.log(numbers);
console.log(strings);

//  Given an array of numbers, find the largest and smallest value without using Math.max or Math.min directly on the whole array (use a loop).
let minValue = Infinity;
let maxValue = -Infinity;
for(const array of array1){
    if(array > maxValue){
        maxValue = array;
    }
    else if(array < minValue){
        minValue = array;
    }
}
console.log(maxValue);
console.log(minValue);

// Flatten a nested array (array containing arrays) into a single flat array.
const arr1 = [1,[2,3],[4,[5,6]]];
console.log(arr1.flat(2));  // flat(Infinity) means all level are flatten

// Rotate an array left by one position (first item moves to the end). Log the result.
let values1 = [1,2,3,4,5];
let first = values1.shift();
values1.push(first);
console.log(values1);

