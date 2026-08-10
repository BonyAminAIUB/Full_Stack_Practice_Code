let name = 'Bony';
let price = 500;
let quantity = 5;

let location = `Kuril, Dhaka`;

// use backtick -> template string it allows multiple line
let message = `Hello, ${name}. Your bill is ${price * quantity}.`;

console.log(message);


function addmissionConfirmationMail(name, ammount){
    let message = `Hello, ${name || 'student'}, 
Your payment is successful.
Your paid ammount is ${ammount}`;

    return message;
}

console.log(addmissionConfirmationMail('Bony', 1000));
console.log(addmissionConfirmationMail(undefined, 1000));