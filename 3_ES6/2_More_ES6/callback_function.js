// A calback is a function passed as an argument to another function

function registerStudent(cb){
    console.log("Student's need more info to register");
    return cb();
}

function userBasicInfo(){
    let student = {
        name : 'Bony Amin',
        age : 24,
        roll : 101
    }
    console.log(student);
}

function pastAcademicInfo(){
    let academicInfo = {
        ssc : '5.00',
        hsc : '5.00'
    }
    console.log(academicInfo);
}

console.log(registerStudent(userBasicInfo));

console.log(registerStudent(pastAcademicInfo));




function calculator(a, b, cb){
    let sum = a + b;
    cb(sum);
}

function displayResult(result){
    console.log(result);
}

calculator(5,10, displayResult);
calculator(50,10, displayResult);