// (function() {

  // Code for scoping fix.

  // // Global object for the game
  // window.game = {};
  //
  // // Player property added for player.js to use
  // game.player = {};




  // Create current player
  var currentPlayer = new Player('Jamie');

  var newPokemon = new Charmander(2, [move['Bubble']]);


  // Level testing
  currentPlayer.addPokemonToParty( new Charmander(1, [move.bubble]) );
  currentPlayer.addPokemonToParty( new Charmander(10, [move.bubble]) );
  currentPlayer.addPokemonToParty( new Charmander(20, [move.bubble]) );
  currentPlayer.addPokemonToParty( new Charmander(30, [move.bubble]) );
  currentPlayer.addPokemonToParty( new Charmander(40, [move.bubble]) );
  currentPlayer.addPokemonToParty( new Charmander(50, [move.bubble]) );
  currentPlayer.addPokemonToParty( new Charmander(60, [move.bubble]) );
  currentPlayer.addPokemonToParty( new Charmander(70, [move.bubble]) );
  currentPlayer.addPokemonToParty( new Charmander(80, [move.bubble]) );

  for (var i = 0; i < currentPlayer.carriedPokemon.length; i+=1) {
    console.log(currentPlayer.carriedPokemon[i].baseHp +
      ' - lvl ' + currentPlayer.carriedPokemon[i].level +
      ' - hp ' + currentPlayer.carriedPokemon[i].maxHp());
  }

  var testtt = currentPlayer.carriedPokemon[0];
  // console.log(testtt.hp);

  // console.log(currentPlayer.carriedPokemon[1].baseHp + ' - lvl ' + currentPlayer.carriedPokemon[1].level + ' - hp ' + currentPlayer.carriedPokemon[1].hp());
  // console.log(currentPlayer.carriedPokemon[2].baseHp + ' - lvl ' + currentPlayer.carriedPokemon[2].level + ' - hp ' + currentPlayer.carriedPokemon[2].hp());
  // console.log(currentPlayer.carriedPokemon[3].baseHp + ' - lvl ' + currentPlayer.carriedPokemon[3].level + ' - hp ' + currentPlayer.carriedPokemon[3].hp());
  // console.log(currentPlayer.carriedPokemon[4].baseHp + ' - lvl ' + currentPlayer.carriedPokemon[3].level + ' - hp ' + currentPlayer.carriedPokemon[3].hp());
  // console.log(currentPlayer.carriedPokemon[5].baseHp + ' - lvl ' + currentPlayer.carriedPokemon[3].level + ' - hp ' + currentPlayer.carriedPokemon[3].hp());
  // console.log(currentPlayer.carriedPokemon[6].baseHp + ' - lvl ' + currentPlayer.carriedPokemon[3].level + ' - hp ' + currentPlayer.carriedPokemon[3].hp());


  // currentPlayer.addPokemonToParty(new Charmander(25, [move['Ember']]));
  // currentPlayer.addPokemonToParty(new Squirtle(54, [move['Bubble']]));
  // currentPlayer.addPokemonToParty(new Bulbasaur(33, [move['Tail Whip']]));

  console.log(currentPlayer);


  // console.log(currentPlayer);



// }());
