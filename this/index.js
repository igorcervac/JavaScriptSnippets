function Greeter(greeting, name){
    this.name = name;
    this.greeting = greeting;

    this.greet = function(){
        console.log(this.greeting + ', ' + this.name + '!');
    }

    this.delayGreet = function(){
        setTimeout(this.greet.bind(this), 1000);
    }
};

const greeter = new Greeter('Hello', 'World');
greeter.greet();
greeter.delayGreet();

const greet = greeter.greet.bind(greeter);
greet();