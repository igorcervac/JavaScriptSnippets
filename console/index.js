console.time("label");

let s = 0;
for(let i=0; i<100000; i++){
    s += i;
}

console.timeEnd("label");