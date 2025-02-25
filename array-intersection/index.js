const array = [1,2,3,4,5,6,7,8,9];
const array2 = [2,4,6,8];

const common = array.filter(x => array2.includes(x));
console.log('Array:', array);
console.log('Array 2:', array2);
console.log('Intersection:', common);
