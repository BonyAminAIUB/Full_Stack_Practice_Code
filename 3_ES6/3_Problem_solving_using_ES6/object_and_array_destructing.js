/*
    Problem 1: Nested Response Extractor
    Extract specific fields from a nested API-Like response object using
    destructuring with renaming + default value.

    Example: {user: {name: 'Bony', age: 24}} -> extract name as
    userName, default age = 18 if missing
*/

const responseExtractor = (obj) => {
    const {user: {name:userName,age = 18},} = obj;
    return `${userName} is ${age} years old`;
}

console.log(responseExtractor({user: {name: 'Bony', age: 24}}));
console.log(responseExtractor({user: {name: 'Amin'}}));




/*
    Problem 2: Swap & Rest Extractor
    Swap two variables extract first/rest elements from an array
    using destructuring, no temp variable

    Example: [a, b] = [b, a]
    Example: [first, ...rest] = [10, 20, 30, 40] => first = 10, rest = [20, 30, 40]
*/

let a = 10;
let b = 20;
[b, a] = [a, b];
console.log(a,b);

const swapAndRestExtractor = (first, ...rest) => {
    return [first, rest];
}

console.log(swapAndRestExtractor(10, 20, 30, 40));