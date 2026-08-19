let numbers : number[] = [1, 2, 3, 4, 5];

numbers.push(6);

let names : string[] = ['bony', 'amin', 'bony amin'];

console.log(numbers);
console.log(names);



// Object

const student : {name:string, id?:number,age:number, isPassed:boolean} = {
    name : 'bony',
    age : 24,
    isPassed : true
}

student.age = 18;
console.log(student);


// tuple

let info : [string, number] = ['bony', 24];

console.log(info);

// inference : implicit
for(let i:number = 0; i<5; i++){
    console.log(i);
}


const letters:string[] = ['a', 'b', 'c', 'd'];
for(const letter of letters){
    console.log(letter.toUpperCase());
}

