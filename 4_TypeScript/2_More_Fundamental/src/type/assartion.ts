let value : unknown;

// value.toUppercase();
// value.toFixed();

let myValue = value as string;
const upper = myValue.toUpperCase();

let yourValue = value as number;
const fixed = yourValue.toFixed();


let data:unknown;
interface User{
    name : string;
    email : string;
}

const userData = data as User;
userData.email = 'name';


const userInfo : User = {
    name : 'Bony Amin',
    email : 'bony@gmail.com'
} as const;

//userInfo.name = 'amin';  // not allowed
