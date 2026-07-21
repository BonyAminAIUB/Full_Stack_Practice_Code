// Create an array with 3 items of your choice. Log it.
const items = [2, 3, 1];
console.log(items);

//  Log the length of the array from Task 1.
console.log(items.length);

// Log the item at index 0 and index 2 of the array.
console.log(items[0]);
console.log(items[2]);

// Change the item at index 1 to a new value. Log the array.
items[1] = 10;
console.log(items);

// Add one item to the end of the array. Log the array.
items.push(100);
console.log(items);

// Remove the last item from the array. Log the array and the removed value.
const removeValue = items.pop();
console.log(items);
console.log(removeValue);

//  Add one item to the start of the array. Log the array.
items.unshift(100);
console.log(items);

// Remove the first item from the array. Log the array and the removed value.
const removeValue2 = items.shift();
console.log(items);
console.log(removeValue2);

// heck whether the array contains a specific value. Log true or false.
console.log(items.includes(10));

// Find the position of a specific value in the array. Log the number.
//const specificValue = items.includes(1);
console.log(items.indexOf(1));
console.log(items[1]);

// Loop through the array with a for loop and log each item.
for(const item of items){
    console.log(item);
}

// Loop through the array with a while loop and log each item.
let i = 0;
while(i < items.length){
    console.log(items[i]);
    i++;
}



