console.log(count);
var count = 10;

var result = sum(3, 5, 8);
console.log(result);

function sum(...numbers) {
    return numbers.reduce((acc, cur) => acc+cur);
}
