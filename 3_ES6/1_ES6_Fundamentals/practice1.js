// Practice 1: Scope Detective

const describeDeclaration = (keyword) => {
    if(keyword === 'var'){
        console.log('Can redeclare, can reassign');
    }
    else if(keyword === 'let'){
        console.log('Cannot redeclare, can reassign');
    }
    else if(keyword === 'const'){
        console.log('Cannot redeclare, cannot reassign');
    }
    else{
        console.log('Invalid');
    }
}

describeDeclaration('var');
describeDeclaration('let');
describeDeclaration('const');
describeDeclaration('');



// Practice 2: Movie Ticket Booking

const bookTicket = (movie, seats = 1, pricePerSeat = 300) => {
    if(typeof movie !== 'string'  || seats < 0 || pricePerSeat < 0){
        console.log('Invalid');
    }
    else{
        console.log(`${movie}: ${seats} seat(s), Total $${seats * pricePerSeat}`);
    }
}

bookTicket("Dune");
bookTicket("Dune", 3);
bookTicket("Dune", 2, 450);
bookTicket(123, 2);




// Practice 3: Receipt Generator

const generateReceipt = (customerName,  items, total) => {
    if(items.length === 0 || !Array.isArray(items)){
        return "Invalid";
    }
    
    return `Receipt for ${customerName}
Items: ${items.join(", ")}
Total: $${total}`;
}

console.log(generateReceipt("Bony", ["Pen", "Book"], 150));
console.log(generateReceipt("Sadia", ["Milk"], 60));
console.log(generateReceipt("Tanvir", [], 0));

