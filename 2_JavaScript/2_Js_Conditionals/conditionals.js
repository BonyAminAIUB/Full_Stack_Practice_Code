/*
1. greater than  : >
2. less than     : <
3. equal         : ==, ===
4. greater than or equal : >=
5. less than or equal    : <=
6. not equal             : !=, !==
7. and  : &&
8. or   : ||

*/ 


const a = 10;
const b = '10';
console.log(a > b);
console.log(a != b);  // only check value is not-equal
console.log(a !== b); // check value and type (strict not equal)
console.log(a == b);  // only check value is equal or not
console.log(a === b); // check value and type (strict equal)
