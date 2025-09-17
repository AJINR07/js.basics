// Combine map and filter to first filter odd numbers and then square them.
const oddSquare = ["1","3","4","2","7","11"].filter(num => num % 2 != 0).map(squ => squ * squ);
console.log(oddSquare);