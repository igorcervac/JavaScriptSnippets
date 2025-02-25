const array = [1, 1, 2, 3, 5, 8];
const array2 = [1, 5, 8];

const difference = array.filter(x => !array2.includes(x));

console.log('Array:', array);
console.log('Array2:', array2);
console.log('Difference:', difference);