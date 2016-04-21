"use strict";

// (function (player) {

  //-----------------------------------
  // THE PLAYER
  //-----------------------------------

  // Register current player
  // No need to use prototypes to add methods, because only one should be created
  var Player = function (playerName) {
      this.playerName = playerName;
      // this.gender = gender;
      this.starterPokemon = '';
      this.carriedPokemon = [];
      this.bag = {
        'items': [],
        'key items': [],
        'pokeballs': []
      };
  };

  Player.prototype.addPokemonToParty = function (pokemon) {
    this.carriedPokemon.push(pokemon);
  };

  // var addPokemon = function (player, pokemon) {
  //     player.carriedPokemon.push(pokemon);
  // }


// }(game.player));
