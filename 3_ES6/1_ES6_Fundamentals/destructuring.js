// Destructuring

const numbers = [10, 20, 30, 40, 50];
//const ten = numbers[0];
//const twenty = numbers[1];

// array destructuring
const [ten, twenty, , , fifty] = numbers; // position maintain korte hobe
console.log(ten, twenty, fifty);

// object destructuring
const student = {
    name : 'Bony Amin',
    id : 101,
    age : 24,
    marks : {
        DS : 90,
        C : 80,
        java : 91
    }
}

// for(let key in student){
//     console.log(key, student[key]);
// }

console.log(student?.marks?.cSharp?.dataScience); // optional chaining
const {age, name:fullName, marks:{C:cPlusPlus, java}} = student;  // position maintain korte hobe na
console.log(age, fullName, cPlusPlus, java);