function Circle(){
    Shape.call(this, 'Circle');
};

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle.constructor;
Circle.prototype.draw = function(){
    console.log(this.name);
};