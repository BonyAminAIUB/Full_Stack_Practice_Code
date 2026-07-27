const numbers = [11, 22, 33, 44, 55];
for(const number of numbers){
    //console.log(number);
}

const student = {
    name : 'Bony Amin',
    id : 101,
    age : 24,
    favSubjects : ['CSE', 'physics', 'math']
}

// for...of  --> array
// for...in  --> object
for(const key in student){
    console.log(key, student[key]);
}