// Object Methods — Keys, Values, Entries, Delete, Seal, Freeze

const user = {
    name : 'Bony Amin',
    age : 24,
    id : 101
}

const keys = Object.keys(user);
const values = Object.values(user);
const entries = Object.entries(user); // it gives array of array

//console.log(keys.length, values);
console.log(entries);

// for(let key of keys){
//     console.log(key, user[key]);
// }

for(let key of keys){
    console.log(key, user[key]);
}

// delete user.id;


// seal (add and delete not allowed but edit is allowed)

const bankAccount = {
    accountNumber : 12345,
    balance : 10000
}

Object.seal(bankAccount);  // it means it cannot delete ans add any item

delete bankAccount.balance;  // can't delete 
bankAccount.nomineeName = 'Something'; //  can't add 

bankAccount.balance = 20000;  // but it can update 

console.log(bankAccount);



// freeze (add, delete and edit not allowed)

const birthCertificate = {
    name : 'Bony Amin',
    birthDate : '04-04-2002',
    certificateNumber : 4235388543
}

Object.freeze(birthCertificate); // it means it cannot delete, update, add any item

delete birthCertificate.birthDate;  //can't delete
birthCertificate.name = 'Something'; // can't add 

birthCertificate.certificateNumber = 904820324;  // also can't update 

console.log(birthCertificate);