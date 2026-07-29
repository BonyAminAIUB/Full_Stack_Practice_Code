// Problem 5: Reverse a string

function reverse(string){
    let str = [];
    for(let i = string.length - 1; i >= 0; i--){
        str.push(string[i]);
    }
    str = str.join("");
    return str;
}

console.log(reverse("Programming"));