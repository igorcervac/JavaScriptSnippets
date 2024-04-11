const ar = [1,2,3,5,8];
const ar2 = [1,2,3];
const ar3 = [1,2,3,5,8];

function arrayEquality(ar, ar2){
    return (ar.length === ar2.length) && ar.every((v, i) => ar2[i] === v);
}

console.log(`${ar} ${arrayEquality(ar,ar2) ? '=': '!='} ${ar2}`);
console.log(`${ar} ${arrayEquality(ar, ar3) ? '=': '!='} ${ar3}`);


