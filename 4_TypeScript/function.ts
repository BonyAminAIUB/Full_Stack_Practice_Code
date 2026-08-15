function add (num1 : number, num2 : number) : number{
    const sum = num1 + num2;
    return sum;
}

const result : number = add(10, 5);
console.log(result);


// arrow function

const getLargerName = (name1:string, name2:string):string => {
    if(name1.length > name2.length){
        return name1;
    }
    return name2;
}

console.log(getLargerName('Bony Amin', 'Amin'));
console.log();

// map
let marks:number[] = [1, 2, 3, 4, 5];

let double:number[] = marks.map(mark => mark*2);
console.log(double);
