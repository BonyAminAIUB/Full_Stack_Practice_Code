let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 resolve");
    }, 4000);
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise 2 resolve");
    }, 2000);
});

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise reject");
    }, 2000);
});

//console.log(p1);

// p1.then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// });

// p2.then((result) => {
//     console.log(result);
// }).catch((e) => {
//      console.log(e);
// });

// Promise.all([p1, p2]).then(() => {
//     console.log(res[0]);
// }).catch(() => {
//     console.log(e);
// });


Promise.race([p1, p2]).then(() => {
    console.log(res);
}).catch(() => {
    console.log(e);
});


function orderFood(item){
    console.log(`${item} delivery processing`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let delivered = Math.random() > 0.3;
            if(delivered){
                resolve(`${item} deliverd`);
            }
            else{
                reject(new Error(`${item} not deliverd`));
            }
        }, 4000);
    });
}

orderFood("Burger").then((res) => {
    console.log(res);
}).catch((e) => {
    console.log(e.message);
}).finally(() => {
    console.log("Food order processing done!");
});