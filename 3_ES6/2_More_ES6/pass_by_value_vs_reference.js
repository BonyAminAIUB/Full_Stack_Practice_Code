// pass by value
let name = 'Bony';

function myFunc(myName){
    myName = 'Bony Amin';
    console.log(myName);    
}

myFunc(name);
console.log(name);



// pass by reference
let student = {
    name : 'Bony Amin',
    age : 24,
    semester : 8
}

function myFunc1(stu){
    // stu.name = 'Bony';
    // stu.semester = 9;
    // stu = {
    //     name : 'Amin',
    //     semester : 10
    // } // new variable create

    console.log(stu);    
}

// reassign = new variable create
// mutate = property change hobe

myFunc1(student);
console.log(student);
