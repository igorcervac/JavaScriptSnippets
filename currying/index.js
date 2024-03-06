function multiply(a){
    return function(b){
        return a*b;
    }
}

function volume(l){
    return function(b){
        return function(h){
            return l*b*h;
        }
    }
}

const multiplyByTen = multiply(10);
console.log(multiplyByTen(5));

console.log(volume(2)(3)(4))