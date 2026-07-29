// Problem 7: Check if a string is a Palindrome or not

function reverse(string){
    let str = [];
    for(let i = string.length - 1; i >= 0; i--){
        str.push(string[i]);
    }
    str = str.join("");
    if(string === str){
        console.log('Palindrome');
    }
    else{
        console.log('Not Palindrome');
    }
}

reverse("Programming");
reverse("daad");
reverse("civic");
reverse("madam");