function myPromise1(){
    return new Promise((resolve, reject) => {
        resolve(`My promise resolve`);
    });
}

async function myPromise(){
    return `My promise resolve`;
}

// myPromise().then((res) => {
//     console.log(res);
// }).catch((e) => {
//     console.log(e);
// });

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`p1 resolve`);
    }, 3000);
});

async function myPromise3(){
    let p1Res = await p1;
    return p1Res;
}

// myPromise3().then((res) => {
//     console.log(res);
// }).catch((e) => {
//     console.log(e);
// });




function fileDownloaded(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`File downloaded completed`)
        }, 2000);
    });
}

async function fileProcess(){
    console.log("File downloading...");
    let downloadedFile = await fileDownloaded();
    console.log(downloadedFile);

    console.log("File processing");
}

fileProcess();


async function fetchData(){
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        //console.log(data);

        const titleArr = data.map((elem) => elem.title);
        console.log(titleArr);
    }
    catch(e){
        console.log(e.message);
    }
    finally{
        console.log("Finally executed");
    }
}

fetchData();