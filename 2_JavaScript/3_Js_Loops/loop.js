console.log("Show me something");
console.log("Show me something");
console.log("Show me something");

// for(initialization ; condition ; modification){
//     repetitive tasks;
// }

for(let count = 0; count < 10 ; count++){
    console.log(count);
}

// initialization;
// while(condition){
//     loop body;
//     increment/ decrement;
// }

let count = 0;
while(count < 10){
    console.log("Inside while loop", count);
    count ++;
}

for(let count = 0; count < 10 ; count++){
    if(count > 5){
        break;
    }
    console.log(count);
}

for(let i = 0; i<=10; i++){
    if(i === 2){
        continue;
    }
    console.log('value of i', i);
}


let i = 0;
do{
    console.log('value of i', i);
    i++;
} while(i < 5)


