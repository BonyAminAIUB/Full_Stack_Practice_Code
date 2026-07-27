const name0 = 'bony';
const name1 = "bony";
const name2 = `bony`;
// const name3 = new String("bony");

console.log(name0.length);
console.log(name0[2]);

name1[2] = "N"; // immutable ie change hobe nah
console.log(name1);

const subject = 'computer science';
const book = ' Computer science ';

console.log(book.toLowerCase());
console.log(book.toUpperCase());
console.log(book.trim());

if(subject === book.trimEnd().trimStart().toLowerCase()){
    console.log('2 string are same');
}
else{
    console.log('2 string are not same');
}

const email = 'bony@gmail.com';
if(email.includes('.com')){
    console.log('has dot');
}

const fileName = 'javascript.pdf';
const twitterHandle = '@bony';
console.log(fileName.endsWith('.pdf'));
console.log(twitterHandle.startsWith('@'));


console.log(fileName.slice(0,4));

const firstName = 'bony';
const lastName = 'amin';
console.log(firstName + lastName);
console.log(firstName.concat(lastName));

const str = 'The person or thing doing the action';
const strSplit = str.split(' ');
console.log(strSplit);
const againStr = strSplit.join(' ');
console.log(againStr);

// reverse() --> string a direct reverse kora jay nah,,,,so age split kore then reverse korte hobe
const commitment = 'I will work hard and will never give up';
const parts = commitment.split('');
const sentenceReverse = parts.reverse().join('');
console.log(sentenceReverse);
//conts parts = commitment.split('').reverse().join('');f