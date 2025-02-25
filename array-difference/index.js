const ar = [1, 1, 2, 3, 5, 8];
const ar2 = [1, 5, 8];

const diff = ar.filter(x => !ar2.includes(x));

console.log('Array:', ar);
console.log('Array2:', ar2);
console.log('Difference:', diff);