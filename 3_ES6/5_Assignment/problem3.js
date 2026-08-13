function countHashtags(caption) {
    let hashtagCount = 0;
    let longestTag = "";
    if(typeof caption !== 'string'){
        return "Invalid";
    }
    
    let splitString = caption.split(" ");
    for(let i = 0; i<splitString.length; i++){
        if(splitString[i].startsWith("#")){
            hashtagCount ++;
            let tag = splitString[i].slice(1);
            if(tag.length > longestTag.length){
                longestTag = tag;
            }
        }
    }
    return { hashtagCount: hashtagCount, longestTag: longestTag};
}

console.log(countHashtags("Loving this weather today #sunny #vibes #weekend"));
console.log(countHashtags("No hashtags here"));
console.log(countHashtags("#ai #ml data science"));
console.log(countHashtags(123));
console.log(countHashtags(["#fun"]));