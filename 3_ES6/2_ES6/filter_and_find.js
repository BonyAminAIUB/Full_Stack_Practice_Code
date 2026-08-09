// Filter: filter out element and create new array based on condition

let prices = [239, 683, 49, 233, 984, 75, 62];

let expensiveProducts = prices.filter((elem) => elem >= 500);
console.log(expensiveProducts);



// Find: filter out element and create new array based on condition(1st match value)

let prices1 = [239, 683, 49, 233, 984, 75, 62];

let expensiveProducts1 = prices.find((elem) => elem >= 500);
console.log(expensiveProducts1);