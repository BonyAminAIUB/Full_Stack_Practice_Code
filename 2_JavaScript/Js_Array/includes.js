const numbers = [12, 98, 77, 6, 23];
console.log(typeof numbers);  // return type is object
console.log(Array.isArray(numbers)); // return boolean value where numbers is array or not
const hasItem = numbers.includes(77); // it returns boolean value

console.log(hasItem);

const num2 = [1,2,4];
const num3 = [5,6,7];
const allNumbers = numbers.concat(num2,num3);  // concat array
console.log(allNumbers);

const joined = numbers.join(' 1,2 '); // join the array
console.log(joined);


const pos = num2.indexOf(4);  // indexOf(value) --> means 'value' is inside the array or not if yes then it return the index otherwise gives -1
console.log(pos);


// array.slice(start, end)
const val = [1,2,10,4,5,6,7];

console.log(val.slice(1,4));
for(const i of val){  // for of loop
    console.log(i);
}
for(let i = 0; i < val.length; i++){
    console.log(val[i]);
}
console.log();
let i = 0;
while(i < val.length){
    console.log(val[i]);
    i++;
}
console.log('length of the val variable:', val.length);
