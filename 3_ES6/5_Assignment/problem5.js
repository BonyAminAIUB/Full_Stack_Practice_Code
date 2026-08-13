function generateLeaderboard(students) {
    if (!Array.isArray(students)) {
        return "Invalid";
    }

    if (students.length === 0) {
        return "Invalid";
    }
    
    for(let student of students){
        if(student === null || typeof student !== "object" || typeof student.score !== "number" || student.name === undefined || student.score === undefined){
            return "Invalid";
        }
    }

    const qualified = students.filter(student => student.score >= 70);

    const names = qualified.map(({ name }) => name.toUpperCase());

    return names.slice(0, 3);
}

console.log(generateLeaderboard([{name:"Rafi",score:90},{name:"Sadia",score:65},{name:"Amin",score:85},{name:"Bony",score:75}]));
console.log(generateLeaderboard([{name:"S",score:70},{name:"B",score:71}]));
console.log(generateLeaderboard([]));
console.log(generateLeaderboard("students"));
console.log(generateLeaderboard([{name:"Rafi"}]));
console.log(generateLeaderboard([{name:"Rafi",score:"90"}]));
