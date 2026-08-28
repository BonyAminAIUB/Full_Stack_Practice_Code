// node.js -> this keyword is a global object
// using DOM -> this keyword is a window 

'use strict';
console.log(this); // {}

console.log(this === module.exports); // true

function myFunc(){
    console.log(this); // 'this' refers global object
}
//myFunc(); 

function myFunc2(){
    console.log(this); // 'this' refers undefined when use "'use strict';"
}
myFunc2();

const myFunc3 = () => {
    console.log(this);  // arrow function has to 'this' value
}

myFunc3();


const person = {
    name : "Bony",
    age : 24,
    showName : function(){
        console.log(this.name + " " + this.age);
    },
};

person.showName();

/* 
this -> 1. Regular Funcion   -> 'this' depends on how it is called
           2. Arrow Funcion     -> haven't any this use outer scop 'this'
           3. Constructor / Class -> refer new object
*/
