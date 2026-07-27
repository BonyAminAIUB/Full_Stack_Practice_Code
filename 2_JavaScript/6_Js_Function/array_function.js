function firstElementDouble(array) {
    const firstElement = array[0];
    const doubled = firstElement * 2;
    return doubled;
}

const numbers = [10, 2, 3, 4, 5];
const doubled = firstElementDouble(numbers);

console.log('Double of the first element', doubled);


const student = {
    name : 'Bony Amin',
    id : 101,
    marks : 88
}

function isStudentAPlus(student){
    const marks = student.marks;
    console.log('His marks', marks);
    if(marks >= 90){
        console.log('Got A+');
    }
    else{
        return false;
    }
}

const isAPlus = isStudentAPlus(student);


function sumOfArray(array1){
    let sum = 0;
    for(const num of array1){
        sum += num;
    }
    return sum;
}

const result1 = sumOfArray(numbers);
console.log(result1);


function getEvenNumbers(array){
    const evens = [];
    for(const num of array){
        if(num % 2 === 0){
            evens.push(num);
        }
    }
    return evens;
}

const evenArray = getEvenNumbers(numbers);
console.log(evenArray);