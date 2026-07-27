// function declaration
function fanOn() {
    console.log('Step-1: Walk towards the switch');
    console.log('Step-1: Press the switch');
    console.log('Step-1: Come back and do whatever you were doing');
}

// call the function
fanOn()


function sayHello(name){
    console.log('Hello',name);
}

sayHello('Bony');


function add(num1, num2){  // parameters
    const sum = num1 + num2;
    console.log('The sum is:',sum);
}

add(10, 6);  // arguments



// function return
function cutHalf(number){
    const half = number / 2;
    return half;
}

const result = cutHalf(100);
