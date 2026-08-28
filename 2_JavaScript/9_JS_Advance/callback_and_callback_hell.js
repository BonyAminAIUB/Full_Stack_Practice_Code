// A callback is a function passed as an argument to another function
 

function calculator(a, b, cb){
    const sum = a + b;
    cb(sum);
}

function display(s){
    console.log(s);
}

calculator(10, 5, (something) => {
    console.log(something);
});





function getQuizMark(mark, cb){
    setTimeout(() => {
        console.log("Fetched Quiz mark");
        cb(mark);
    }, 2000);
}

function getClassTestMark(mark, cb){
    setTimeout(() => {
        console.log("Class test mark");
        cb(mark);
    }, 2000);
}

function getFinalExamMark(mark, cb){
    setTimeout(() => {
        console.log("Final exam mark");
        cb(mark);
    }, 2000);
}

function displayTotalMark(quizMark, classTestMark, finalMark){
    const total = quizMark + classTestMark + finalMark;
    console.log(total);
}

getQuizMark(9, (quizMark) => {
    getClassTestMark(8, (classTestMark) => {
        getFinalExamMark(78, (finalMark) => {
            displayTotalMark(quizMark, classTestMark, finalMark);
        });
    });
});