const fish = {
    swim: function(){
        console.log('Swim');
    }
};

const tuna = { 
    __proto__: fish
};


fish.swim();
tuna.swim();

console.log(tuna.__proto__.__proto__ === fish.__proto__);




