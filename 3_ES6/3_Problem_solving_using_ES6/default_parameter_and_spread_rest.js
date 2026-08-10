/*
    Problem 1: Flexible Total Calculator
    calculateTotal(...prices) using rest params, sums any number of
    prices, with a default discount = 0

    Example: calculateTotal(0, 100, 200, 300) -> 600
    Example: calculateTotal(10, 100, 200) -> 270 (10 = discount)

    Simple rule: discount is always the first argument
*/

const calculateTotal = (discount, ...prices) => {
    const sum = prices.reduce((accumulator, prices_list) => accumulator+prices_list , 0); 
    return total = sum - (sum * (discount/100));
}

console.log(calculateTotal(0, 100, 200, 300));
console.log(calculateTotal(10, 100, 200));





/*
    Problem 2: Merge & Duplicate Arrays
    Merge two arrays and remove duplicates using spread + Set

    Example: mergeDuplicate([1,2,3] + [2,3,4]) -> [1,2,3,4]
*/

let arr1 = [10, 20, 30, 40, 50];
let arr2 = [50, 60, 20, 90];

const mergeDuplicate = (arr1, arr2) => {
    const mergeArr = [...arr1, ...arr2];
    let newArr = [...new Set(mergeArr)];
    return newArr;
}

console.log(mergeDuplicate(arr1, arr2));