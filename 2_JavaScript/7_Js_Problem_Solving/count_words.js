// Problem 8: Counts words in a sentence

function vowelCount(string){
    let value = string.split(' ');
    return value.length;
}

let value = vowelCount("Programming in c++");
console.log(value);