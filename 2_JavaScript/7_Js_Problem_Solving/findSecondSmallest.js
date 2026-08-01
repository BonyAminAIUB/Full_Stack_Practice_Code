function findSecondSmallest(numbers) {
  let smallest = Infinity;
  let secondSmallest = Infinity;
  let a = [];
  for(let i = 0; i<numbers.length; i++){
    if(numbers[i] < smallest){
        secondSmallest = smallest;
        smallest = numbers[i];
    }
    else if(numbers[i] > smallest && secondSmallest > numbers[i]){
            secondSmallest = numbers[i];
        }
  }
  return secondSmallest;
}
 
console.log(findSecondSmallest([10, 5, 8, 20, 15])); 
