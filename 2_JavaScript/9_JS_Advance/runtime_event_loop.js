// Synchronous: Synchronous means that you can only execute one thing at a time

// Asynchronous: Asynchronous means that you can execute multiple things at a time and 
// you don't have to finish executing the current thing in order to move on to next one

// Asynchronous flow -> Web APIs => Task Queue => Event Loop => Call Stack

console.log("A");

setTimeout(() => {
    console.log("B");
}, 3000);

console.log("C");

setTimeout(() => {
    console.log("D");
}, 0);

console.log("E");