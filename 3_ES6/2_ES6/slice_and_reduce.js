// slice(start, end);

const fruts = ['apple', 'orange', 'mango', 'banana', 'grape'];

const slices = fruts.slice(1, 3);
console.log(slices);



// reduce(accumulator, element, index, array)
// accumulator er value initially set kore dite hoy

let numbers = [10, 20, 30, 40, 50];
const sum = numbers.reduce((accumulator, element, index, array) => {
    console.log(accumulator, element, index, array);
    return accumulator + element;
}, 0);

console.log(sum);

