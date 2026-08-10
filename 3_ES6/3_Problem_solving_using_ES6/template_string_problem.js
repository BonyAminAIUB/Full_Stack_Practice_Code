/*
    Receipt Generator (template strings)
    Build a receipt generator using template strings - take item name,
    price, qty as input, output formatted multiline receipt.

    Example: Input ('Pen', 20, 3) => Output 'Pen x3 = 60 tk'
*/

const receiptGenerator = (name, price, qty) => {
    return `${name} x${qty} = ${price*qty}`;
}

console.log(receiptGenerator('Pen', 20, 3));

