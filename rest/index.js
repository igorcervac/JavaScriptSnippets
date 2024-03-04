function total(...values){
    return values.reduce((s,n) => s+n, 0);
}

console.log("Total: ", total(1,2,3,5,8,13));

