function fibbonacci(n){
    if (n<=1){
        return n;
    }
    return fibbonacci(n-1) + fibbonacci(n-2);
};

function memo(func){
    let cache = {};

    return function(n){
    if (n in cache){
        result = cache[n];
    }
    else {
        result = func(n);
        cache[n] = result;
    }

    return result;
    }
}
console.log(memo(fibbonacci)(5));