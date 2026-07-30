function isElevatorSafe(weights) {
    let sum = 0;
    if(Array.isArray(weights) !== true){
        return "Invalid";
    }
    for(let i = 0; i<weights.length; i++){
        if(typeof weights[i] !== 'number' || Number.isNaN(weights[i])){
            return "Invalid";
        }
        sum += weights[i];
    }
    if(sum <= 400){
        return true;
    }
    else{
        return false;
    }
}