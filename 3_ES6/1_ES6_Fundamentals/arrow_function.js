// function sayGreet(name){
//     return `Hello ${name}, Good Morning!`;
// }

// Arrow Function syntax
// const sayGreet = (name) => {
//     return `Hello ${name}, Good Morning!`;
// }

// or use
const sayGreet = name => `Hello ${name}, Good Morning!`;  // implicit return

console.log(sayGreet(`Bony`));

const sayHi = () => `Hi`;

console.log(sayHi());

console.log(this); // {}

// this keyword
const student = {
    name : 'Bony Amin',
    id : 101,
    age : 24,
    showName : function() {
        //return student.name;
        return `Name: ${this.name}, Id: ${this.id}`;
    },
    showAge : () => {
        return `Age: ${student.age}`;
    }
}

console.log(student.showName());

console.log(student.showAge());