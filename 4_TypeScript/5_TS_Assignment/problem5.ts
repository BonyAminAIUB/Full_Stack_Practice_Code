interface Results {
    total : number;
    average : number;
}
const getQuizSummary = (scores:number[]):Results => {
    let total = scores.reduce((acc, current) => acc + current, 0);
    let average = (total / scores.length) || 0;
    return {total, average};
};

console.log(getQuizSummary([8, 9, 7, 10]));
console.log(getQuizSummary([5, 5]));
console.log(getQuizSummary([]));