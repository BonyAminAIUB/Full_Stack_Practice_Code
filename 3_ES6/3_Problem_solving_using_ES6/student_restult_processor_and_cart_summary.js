/*
    Problem 1: Add Grade to Each Student (Without Changing Origianl)

    You have an array of student objects, each with name and marks.
    Create a NEW array where every student also has a 'grade' field,
    based on their marks. The ORIGINAL array stay exactly the same.

    Grading rule:
    marks => 90 -> 'A+'
    marks => 80 -> 'B+'
    marks => 60 -> 'C'
    below 60    -> 'Fail

    Input:
    [
        { name: 'Bony', marks : 85},
        { name: 'Amin', marks : 45}
    ]
    
    Output (new array):
    [
        { name: 'Bony', marks : 85, grade : 'B+'},
        { name: 'Amin', marks : 45, grade : 'Fail'}
    ]

    Original array remain untouched (no 'grade' added to it)
*/



const addGrade = (students) => {
    let students2 = students.map(student => {
        let studentsWithMarks = {
            name : student.name,
            marks : student.marks
        }
        if(student.marks >= 90){
            studentsWithMarks.grade = 'A+';
        }
        else if(student.marks >= 80){
            studentsWithMarks.grade = 'B+';
        }
        else if(student.marks >= 60){
            studentsWithMarks.grade = 'C';
        }
        else{
            studentsWithMarks.grade = 'Fail';
        }
        return studentsWithMarks;
    })
    return students2;
}

let students =[
        { name: 'Bony', marks : 85},
        { name: 'Amin', marks : 45}
    ]
console.log(addGrade(students));





/*
    Problem 2: Cart Total Calculator

    You have an array of cart items, each with a name, price and qty(quantity)
    Calculate:
        1. Total number of items in the cart (sum of all qty)
        2. Total cart (sum of price * qty for each item)

    Then print one final message using template string:
        `Total: X items, Y taka`

    Input:[
        {name : 'Pen', price : 100, qty : 1},
        {name : 'NoteBook', price : 100, qty : 2}
    ]
    
    Output:
    "Total: 3 items, 300 taka"

    Bonus: if the cart missing (null/undefined) don't crash -
    print "Total: 0 items, 0 taka" instead.
*/


const cartCalculator = (products) => {
    let totalItems = 0;
    let totalPrice = 0;
    for(let product of products){
        totalItems += product.qty;
        totalPrice += product.price * product.qty;
    }
    return `Total: ${totalItems ? totalItems : 0} items, ${totalPrice ? totalPrice : 0} taka`;
}

const products = [
        {name : 'Pen', price : 100, qty : 1},
        {name : 'NoteBook', price : 100, qty : 2}
    ]

const products2 = []

console.log(cartCalculator(products));
console.log(cartCalculator(products2));