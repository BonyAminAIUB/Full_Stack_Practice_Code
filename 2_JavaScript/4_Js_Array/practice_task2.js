// //  Combine two arrays into one new array. Log the result.
const array1 = [1, 0, 2, 3, 4, 5];
const array2 = [7, 4, 0, 1, 3];
console.log(array1.concat(array2));

//  Take a portion of an array (not the whole thing) without changing the original. Log the result.
console.log(array1.slice(1,4));

//  Turn an array of words into a single sentence string.
const stringValue = ['word', 'word', 'word'];
const sentence = stringValue.join(" ");
console.log(sentence);

// Check two variables (one array, one not) and log whether each is an array.
const value = 10;
console.log(Array.isArray(array1));
console.log(Array.isArray(value));

// Reverse an array of at least 5 items. Log the result.
console.log(array2.reverse());

// Sort an array of names alphabetically. Log the result.
const names = ['bony', 'amin', 'bonyAmin', 'Bony', 'hello'];
console.log(names.sort());

//Sort an array of numbers in ascending order, keeping numeric order correct (not string order).
console.log(array2.sort());

// Given an array of numbers, log only the values greater than 10, using a loop.
const newArray = [1, 20, 3, 50, 0, 30];
for(const arr of newArray){
    if(arr > 10){
        console.log(arr);
    }
}

// Given an array of numbers, calculate and log the total sum, using a loop.
let sum = 0;
for(const arr of newArray){
    sum += arr;
}
console.log(sum);