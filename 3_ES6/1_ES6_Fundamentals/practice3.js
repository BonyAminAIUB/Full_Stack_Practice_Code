// Practice 7: Inventory Object Manager

const manageInventoryObject = (obj, action) => {
    if(action === 'keys'){
        return Object.keys(obj);
    }
    else if(action === 'values'){
        return Object.values(obj);
    }
    else if(action === 'entries'){
        return Object.entries(obj);
    }
    else if(action.startsWith('delete:')){
        let property = action.split(":")[1];
        delete obj[property];
        return obj;
    }
    else if(action === 'seal'){
        return Object.seal(obj);
    }
    else if(action === 'freeze'){
        return Object.freeze(obj);
    }
    else{
        return 'Invalid';
    }
}

console.log(manageInventoryObject({a:1,b:2,c:3}, "keys"));
console.log(manageInventoryObject({a:1,b:2,c:3}, "entries"));
console.log(manageInventoryObject({a:1,b:2,c:3}, "delete:c"));
console.log(manageInventoryObject({a:1}, "shrink"));



// Practice 8: Object Looper

const printObjectDetails = (obj, loopType) => {
    if(loopType === 'forin'){
        let newObj = [];
        for(let key in obj){
            newObj.push(`${key}: ${obj[key]}`);
        }
        return newObj;
    }
    else if(loopType === 'forofentries'){
        let newObj = [];
        for(let key of Object.entries(obj)){
            newObj.push(`${key[0]}: ${key[1]}`);
        }
        return newObj;
    }
    else if(loopType === 'entriesDestructure'){
        return Object.entries(obj).map(function ([key, value]){
            return `${key}: ${value}`;
        });
    }
    else{
        return "Invalid";
    }
}

console.log(printObjectDetails({fruit:"Mango",price:50}, "forin"));
console.log(printObjectDetails({fruit:"Mango",price:50}, "entriesDestructure"));
console.log(printObjectDetails({}, "loopThrough"));


// Practice 9: ES6 Refactor Challenge

