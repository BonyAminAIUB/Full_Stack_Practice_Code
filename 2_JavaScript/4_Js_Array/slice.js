const numbers = [4, 2, 5, 6, 20, 9, 0];

const sliceArray = numbers.slice(1,3);  // original array can't change
console.log(sliceArray);

const parts = numbers.splice(2, 4, 100, 200);  // splice() change the original array
console.log('parts: ', parts);
console.log('after splice', numbers);

const values = [4, 2, 5, 6, 3, 9, 0, 1];
values.sort();
console.log(values);