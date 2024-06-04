count = 10;
console.log(count);
var count;

var result = sum(3, 5, 8);
console.log(result);

function sum(...numbers) {
    return numbers.reduce((acc, cur) => acc+cur);
}
