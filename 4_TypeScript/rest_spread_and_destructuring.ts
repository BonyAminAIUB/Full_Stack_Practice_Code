// Destructuring

const user:{name:string, age:number, isAdmin:boolean} = {
    name : 'Bony',
    age : 24,
    isAdmin : true
}

const {age, isAdmin:admin} = user;


// Rest 
const device:{name:string, type:string, price:number, color:string,storage:string}= {
    name : 'iPhone',
    type : 'Smartphone',
    price : 100000,
    color : 'siera blue',
    storage : '256GB'
};
const {name:deviceName, ...deviceInfo} = user;


// Spread

const numbers3:number[] = [1, 2, 3, 4, 5];
const newNumbers:number[] = [6, 7, 8, 9, 10];

const totalNumbers:number[] = [...numbers3, ...newNumbers];