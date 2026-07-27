const numbers = [1, 5, 2, 10, 0, 3];

const reversed = numbers.reverse();
console.log(reversed);

const names = ['bony', 'amin', 'bonyAmin', 'Bony', 'hello'];
const afterReverse = [];
for(const name of names){
    afterReverse.unshift(name);  
}
console.log(afterReverse);