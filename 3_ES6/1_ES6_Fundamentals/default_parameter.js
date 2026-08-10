function greet(name){
    return 'Hello, ' + name;
}

console.log(greet("Bony"));
//console.log(greet());  // gives undefined

// default parameter
function greet(name = 'guest'){
    return 'Hello, ' + name;
}

console.log(greet()); // Hello, guest


function makeCoffee(suger = 1){
    return "Coffee is prepared with " + suger + " spoon suger";
}

console.log(makeCoffee());
console.log(makeCoffee(2));



function multiply(a, b = 1){
    return a * b;
}

console.log(multiply(5));
console.log(multiply(10, undefined)); //10

// previously used in js
function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 1;
  return a * b;
}

console.log(multiply(5, 2)); // 10
console.log(multiply(5)); // 5


