function createCounter(step) {
    let count = 0;
    return {
        increase: function(){
            count+=step;
            return count;
        },
        decrease: function(){
            count-=step;
            return count;
        }
    }
}

let counter = createCounter(2);

console.log(counter.increase());
console.log(counter.increase());

console.log(counter.decrease());