const orangePrice = 20;
const mangoPrice = '15';
const totalPrice = orangePrice + mangoPrice;
console.log('total price: ' + totalPrice);

console.log(typeof orangePrice);
console.log(typeof mangoPrice);
console.log(typeof totalPrice);


const newMangoPrice = parseInt(mangoPrice);
//const newMangoPrice = parseFloat(mangoPrice);
const newTotalPrice = newMangoPrice + orangePrice;
console.log(newTotalPrice);
console.log(typeof newTotalPrice);


const name = 'bony';
const num = parseFloat(name);
console.log(num); //NaN means not a number
console.log(typeof num);
console.log(typeof name);


const firstNumber = 0.1;
const secondNumber = 0.2;
const totalNumber = firstNumber + secondNumber;

console.log(totalNumber);

const totalTwoDecimal = totalNumber.toFixed(2);
console.log(totalTwoDecimal);
console.log(typeof totalTwoDecimal);  // string type

const totalTwoDecimalNumber = parseFloat(totalTwoDecimal);
console.log(totalTwoDecimalNumber);
console.log(typeof totalTwoDecimalNumber);
