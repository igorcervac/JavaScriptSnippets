Array.prototype.random = function(){
    if (this.length > 0){
        let index = Math.floor(Math.random()*this.length);
        return this[index];
    }
    return null;
}

let array = [3, 5, 8, 13];
let number = array.random();
console.log(number);