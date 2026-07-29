
let monitor = {
    color : 'Black',
    brand : 'HP',
    displaySize : 27,
    price : 30000.5
}

console.log(monitor['color']);  // bracket notation
console.log(monitor.brand);  // dot notation

// for in loop
for(let key in monitor){
    console.log(key, ":", monitor[key]);
}

console.log();
// using key method
let objKey = Object.keys(monitor);
console.log(objKey);

// for(let i = 0; i<objKey.length; i++){
//     let key = objKey[i];
//     console.log(key);
//     console.log(i, ":", monitor[key]);
// }

for(let key of objKey){
    console.log(key, ":", monitor[key]);
}



console.log("------------");

// Problem 13: Filter numbers greater than a value

let student = {
    name : 'Bony Amin',
    age : 24,
    university : 'AIUB',
    department : 'CSE'
}

function objectOperation(student){
    let keyValue = Object.keys(student);
    console.log(keyValue);

    let studentValues = Object.values(student);
    console.log(studentValues);

    for(let key in student){
        console.log(key, ":", student[key]);
    }

    console.log('Total Properties:', keyValue.length);
    
    let hasEmailProperty = student.hasOwnProperty('email');
    console.log(hasEmailProperty);
}

objectOperation(student);
