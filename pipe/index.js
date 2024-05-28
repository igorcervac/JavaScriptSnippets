const pipe = (...functions) => seed => functions.reduce((acc, cur) => cur(acc), seed);
const double = x => 2*x;
const triple = x => 3*x; 
console.log('Result:', pipe(double, triple)(2));