function orderFood(item){
    setTimeout(() => {
        console.log(`${item} delivered`);
    }, 4000);
}

let result = orderFood("Burger");
console.log(result);  // undefined caused orderFood() return immediately

function orderFood2(item){
    let a = new Promise((resolve, rejecet) => {
        setTimeout(() => {
            resolve(`${item} delivered`);
        }, 4000);
    });
    return a;
}

function orderFood3(item){
    let a = new Promise((resolve, rejecet) => {
        setTimeout(() => {
            rejecet(new Error(`${item} not delivered`));
        }, 2000);
    });
    return a;
}

// let result2 = orderFood2("Burger");
// console.log(result2);
// orderFood2("Burger").then((result) => {
//     console.log(result);
// });

// orderFood3("Pizza").catch(() => {
//     console.log(error.message);
// });


