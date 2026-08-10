// spread and rest operator 
// spread operator applied Array and Object

let numbers = [10, 20, 30, 100, 40, 50];

console.log(numbers);
console.log(...numbers);  // spread operator --> ...

//let maxNumber = Math.max(numbers); //Nan
let maxNumber = Math.max(...numbers); 
let minNumber = Math.min(...numbers); 
console.log(maxNumber); //100
console.log(minNumber); //10


let numbers2 = numbers;
numbers.push(80);
console.log(numbers2);  // numbers a push korleo 2 tai update hoy

let numbers0 = [10, 20, 30, 100, 40, 50];

let numbers3 = [...numbers0, 1000, 2000]; // independent eta ar reference nibe nah
numbers0.push(90);
console.log(numbers3);


let students = {
    name : "Bony Amin",
    id : 101
}

//let students2 = students;
let students2 = {...students, gpa : "5.00"}; // spread operator
students.something = "test";
console.log(students2);



// Rest operator

// function sum(a, b, c){
//     return a + b + c;
// }

function sum(a, b, c, ...restNumbers){ // restNumbers array hisebe nibe
    let sum = 0;
    for(let number of restNumbers){
        sum += number;
    }
    return a + b + c + sum;
}

console.log(sum(10, 20, 30, 40, 50, 50, 100, 200));