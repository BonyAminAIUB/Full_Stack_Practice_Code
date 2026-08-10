// Practice 4: BMI Calculator

const calculateBMI = (weight, height) => {
    if(weight <= 0 || height <= 0){
        return "Invalid";
    }
    else{
        let bmi = weight / (height * height);
        return Number(bmi.toFixed(2));
    }
}

console.log(calculateBMI(70, 1.75));
console.log(calculateBMI(50, 1.6));
console.log(calculateBMI(60, -1.7));




// Practice 5: Inventory Merge & Max Score

const mergeInventory = (arr1, arr2) => {
    return [...arr1, ...arr2];
}

const highestScore = (scores) => {
    if(!Array.isArray(scores)){
        return "Invalid";
    }
    return Math.max(...scores);
}

console.log(mergeInventory([1,2],[3,4]));
console.log(highestScore([3,7,2,9,4]));
console.log(highestScore("3,7,2"));



// Practice 6: User Profile Extractor

const  extractUserInfo = (userObj) => {
    if(userObj.user.name === undefined){
        return "Invalid";
    }
    else{
        const {user:{name, age}, hobbies} = userObj;
        return `${name} (${age}) likes ${hobbies[0] || 'nothing yet'}`;
    }
}

console.log(extractUserInfo({user:{name:"Sadia",age:17}, hobbies:["reading","coding"]}));
console.log(extractUserInfo({user:{name:"Bony",age:24}, hobbies:[]}));
console.log(extractUserInfo({user:{age:30}, hobbies:[]}));