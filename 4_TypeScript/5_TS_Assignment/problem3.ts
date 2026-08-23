const calculateWeeklyTotal = (expenses:number[]):number => {
    if(expenses.length === 0){
        return 0;
    }
    else{
        let total = 0;
        for(let i = 0; i<expenses.length; i++){
            total += expenses[i];
        }
        return total;
    }
};

console.log(calculateWeeklyTotal([200, 450, 100]));
console.log(calculateWeeklyTotal([1000, 250]));
console.log(calculateWeeklyTotal([]));