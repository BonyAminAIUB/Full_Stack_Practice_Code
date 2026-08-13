function studentIntroduction(student) {
    if(typeof student !== 'object' || student === null || student.name === undefined || student.age === undefined || student.course === undefined){
        return  "Invalid";
    }
    return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`;
}

console.log(studentIntroduction({name:"Rafi",age:18,course:"JavaScript"}));
console.log(studentIntroduction({}));
console.log(studentIntroduction("student"));

