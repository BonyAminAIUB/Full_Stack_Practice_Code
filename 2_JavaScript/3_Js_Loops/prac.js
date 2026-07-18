// Write a for loop that prints "Hello" 5 times.

for(let i = 0; i<5; i++){
    console.log("Hello");
}


// Write a for loop that prints numbers from 1 to 10.
for(let i = 1; i<=10; i++){
    console.log(i);
}


// Write a while loop that prints numbers from 10 down to 1.
let i = 10;
while(i>0){
    console.log(i);
    i--;
}


// Using a while loop, print "Loop in continued" exactly 7 times.
let count = 0;
while(count<7){
    console.log("loop in continued");
    count++;
}


// Write a for loop that prints all even numbers between 1 and 30.
for(let i = 2; i<=30; i+=2){
    console.log(i);
}


// Write a for loop that calculates the sum of numbers from 1 to 20 and prints the result.
let sum = 0;
for(let i = 1; i<=20; i+=2){
    sum += i;
}
console.log(sum);


// Ask the user for a number (or set a variable), then print its multiplication table from 1 to 10 using a for loop. Example: if the number is 7 → 7 x 1 = 7, 7 x 2 = 14, ... 7 x 10 = 70.
let value = 7;
for(let i = 1; i<=10; i++){
    console.log(value, '*', i, '=', value*i);
}


// Write a for loop that counts down from 20 to 1
for(let i = 20; i>=1; i--){
    console.log(i);
}


// Write a for loop that calculates the sum of all even numbers from 2 to 50.
let evenSum = 0;
for(let i = 2; i<=50; i+=2){
    evenSum += i;
}
console.log(evenSum);


//Write a for loop from 1 to 50 that stops completely (break) as soon as it reaches a number greater than 30.
for(let i = 1; i<=50; i++){
    if(i > 30){
        break;
    }
    console.log(i);
}


// Write a for loop from 1 to 20 that skips (continue) any number divisible by 4.
for(let i = 1; i<=20; i++){
    if(i % 4 == 0){
        continue;
    }
    console.log(i);
}


// Write a do while loop that prints numbers from 1 to 5. Then modify the condition so it is false from the start (for example, i > 10) and observe that the loop still runs once.
let num = 1;
do{
    console.log(num);
    i++;
}while(num > 10)


// Write the same task — printing numbers 1 to 5 — three times: once using for, once using while, and once using do while. Compare how the code structure differs for each.
for(let i = 1; i<=5; i++){
    console.log(i);
}
let val = 1;
while(val<6){
    console.log(val);
    val++;
}
let val2 = 1;
do{
    console.log(val2);
    val2++;
}while(val2 < 6)


//Write a program that:
// Loops from 1 to 100.
// Skips (continue) any number divisible by 5.
// Stops (break) completely once it reaches a number greater than 40.
// Prints every number that passes both checks.

for(let i = 0; i<100; i++){
    if(i % 5 == 0){
        continue;
    }
    else if(i > 40){
        break;
    }
    console.log(i);
}
