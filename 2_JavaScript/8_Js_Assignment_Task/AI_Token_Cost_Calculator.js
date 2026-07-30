function calculateAiCost(tokensUsed) {
    if(typeof tokensUsed !== 'number' || Number.isNaN(tokensUsed) || tokensUsed < 0){
        return "Invalid";
    }
    else{
        if(tokensUsed > 500){
            let value = tokensUsed - 500;
            let tk = Math.floor(value / 100) * 5;
            return tk;
        }
        else{
            return 0;
        }
    }
}