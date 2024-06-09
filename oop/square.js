function Square(){ 
    Shape.call(this, 'Square'); 
};
Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;
Square.prototype.draw = function(){
    console.log(this.name);
};