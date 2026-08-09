let array = [1, 2, 3, 4, 5];

// let double = [];
// for(let i = 0; i<array.length; i++){
//     double.push(array[i] * 2);
// }
// console.log(double);


// const double = array.map(function(element){
//     return element * 3;
// });

// map function --> to modify array and get new array
const double = array.map((element) => element*4);
console.log(double);
console.log(array);

