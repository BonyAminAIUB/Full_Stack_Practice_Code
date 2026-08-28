// set time out syntax
// setTimeout(function, delay);

console.log("A");

let timerId = setTimeout(() => {
    console.log("Bony");
}, 2000);

clearTimeout(timerId);

console.log("B");


// set interval syntax
// setInterval(function, delay);

let count = 0;
const intervalId = setInterval(() => {
    count ++;
    console.log(`Interval executed ${count} times`);
    if(count === 5){
        clearInterval(intervalId);
    }
}, 1000);




// setInterval(() => {
//     let date = new Date();
//     let time = date.toLocaleTimeString();
//     console.log(time);
// }, 2000);