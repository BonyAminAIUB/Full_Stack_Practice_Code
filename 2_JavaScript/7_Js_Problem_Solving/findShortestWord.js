function findShortestWord(sentence) {
    let words = sentence.split(" ");
    let shortest = [];
    let v = '';
    let small = words[0].length;
    for (let i = 0; i < words.length; i++) {
        shortest.push(words[i].length);
    }
    for (let i = 0; i < words.length - 1; i++) {
        if(words[i+1].length < small){
            small = words[i+1].length;
            v = words[i+1];
        }
    }
    console.log(v);
    return shortest;
}
console.log(findShortestWord("JavaScript is a fun language"));
