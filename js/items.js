"use strict";

var Item = function(name, type, effect, value) {
    this.name = name;
    this.type = type;
    this.effect = effect;
    this.value = value;
};

var item = {};

var Pokeball = function(name, value) {
    Item.call(this, 'pokeball', null, null);
    this.name = name;
    this.value = value; // Assign value as percentage of catch rate
};
Pokeball.prototype = Object.create(Item.prototype);


// Types of pokeball as instances
// TODO Add more complexity to this. Value should vary based on level of pokemon.
var PokeBall = function() {
     Pokeball.call(this, 'Poke Ball', 20);
}
var GreatBall = function() {
     Pokeball.call(this, 'Great Ball', 35);
}
var UltraBall = function() {
     Pokeball.call(this, 'Ultra ball', 50);
}
var MasterBall = function() {
     Pokeball.call(this, 'Master Ball', 100);
}

PokeBall.prototype = Object.create(Pokeball.prototype);
GreatBall.prototype = Object.create(Pokeball.prototype);
UltraBall.prototype = Object.create(Pokeball.prototype);
MasterBall.prototype = Object.create(Pokeball.prototype);
