function isEven(number){
    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}

let value = 48;
const result = isEven(value);
console.log(value, 'is Even?', result);

