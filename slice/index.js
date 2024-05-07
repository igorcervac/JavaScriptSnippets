Array.prototype.insert = function(index, value) {
    const array_part = this.slice(0, index);
    const array_part2 = this.slice(index);
    return [...array_part, value, ...array_part2];
}

let array = [3, 5, 13, 21];
console.log(array);

array_inserted = array.insert(2, 8);
console.log(array_inserted);