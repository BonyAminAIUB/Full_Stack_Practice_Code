/*
    Problem 1: Most Expensive Product
    Given an object of product prices, use Object.keys() or Object.ectries + Loop to
    find the most expensive product.

    Example: {pen : 20, book : 150, bag : 500} -> 'bag
*/


const swapAndRestExtractor = (obj) => {
    let keys = Object.keys(obj);
    let highest = 0;
    let expensiveProduct = '';
    for(let key of keys){
        if(highest < obj[key]){
            highest = obj[key];
            expensiveProduct = key;
        }
    }
    return expensiveProduct;
}

console.log(swapAndRestExtractor({pen : 20, book : 150, bag : 500}));



/*
    Problem 2: Safe Nested Access
    Safely access deeply nested optional data using?. and ?? without
    throwing errors.

    Example: user?.address?.city ?? 'City not found' when address is undefined
*/

let user1 = {
    name : 'Bony',
    address : {
        city : 'Sirajganj'
    }
};

let user2 = {
    name : 'Amin'
    //address : 'Dhaka'
};

const getCity = (user) => {
    return user.address?.city;
}

console.log(getCity(user1));
console.log(getCity(user2));