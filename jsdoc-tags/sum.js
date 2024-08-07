/**
 * Sum.js
 * @version 2.0
 * 
 */

/**
 * Calculates the sum of the two numbers
 * @param {number} a
 * @param {number} b 
 * @returns {number}
 * @deprecated Since version 2.0. Use sum2 instead
 */
function sum(a, b){
    console.warn("Calling deprecated function!");
    return a + b;
}

/**
 * Calculates the sum of the two numbers
 * @param {number} a
 * @param {number} b 
 * @returns {number}
 */
function sum2(a, b){
    return a + b;
}

console.log(sum(2,2));
console.log(sum2(2,2));