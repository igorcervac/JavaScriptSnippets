const array = [1,1,2,3,5,5,8,13,21];
console.log(array);

const unique_array = array.reduce((a,v) => {
    if (!a.includes(v)){
        a.push(v);
    }
    return a;
}, []);
console.log(unique_array);
