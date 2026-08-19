function calculateTax(amount : number | string | null, taxRate: number): number{
    if(typeof amount === 'string'){
        amount = parseFloat(amount);
    }
    if(amount === null){
        amount = 0;
    }
    return amount * taxRate;
}

const myTax = calculateTax(100, 0.15);
const yourTax = calculateTax('100', 0.15);


// null
const myBalance : number | null = null;

// any
const myVariable : any = 'hello';

// undefined
let myMoney : number | undefined;

// unknown

// never -> it can't return anything
