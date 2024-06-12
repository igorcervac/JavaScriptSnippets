String.prototype.capitalize = function(){
    if (this.length > 0){
        return this.charAt(0).toUpperCase() + this.slice(1);
    }
    return this.toString();
};

console.log('string'.capitalize());
console.log(''.capitalize());
