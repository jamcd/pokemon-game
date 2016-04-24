// (function() {

  // Code for scoping fix.

  // // Global object for the game
  // window.game = {};
  //
  // // Player property added for player.js to use
  // game.player = {};


  // Create current players
  var currentPlayer = new Player('Jamie');
  var enemyPlayer = new Player('Gary Oak');

  currentPlayer.addPokemonToParty( new Charmander(20, ['ember', 'tailWhip']) );

  enemyPlayer.addPokemonToParty( new Squirtle(20, ['scratch', 'bubble']) );


  // AFTER BATTLE FUNCTIONS (and run once before at the start of game?)
  //
  var testPokemon = currentPlayer.carriedPokemon[0];
  testPokemon.addXp(1000);
  testPokemon.levelUpCheck();
  testPokemon.calculateMaxHp();
  // console.log(testPokemon.moveSet);

  // ADDING TO BAG
  //
  currentPlayer.addItemToBag(new PokeBall());
  currentPlayer.addItemToBag(new GreatBall());
  currentPlayer.addItemToBag(new MasterBall());
  // console.log(currentPlayer.bag);

  // BATTLE
  //
  battle(currentPlayer, enemyPlayer);



  // Wild pokemon have the same xp as the base of their level (aka their level cubed)


  // Level testing
  // currentPlayer.addPokemonToParty( new Charmander(0, ['bubble', 'tailWhip']) );
  // currentPlayer.addPokemonToParty( new Charmander(10, ['bubble']) );
  // currentPlayer.addPokemonToParty( new Charmander(20, ['bubble']) );
  // currentPlayer.addPokemonToParty( new Charmander(30, ['bubble']) );
  // currentPlayer.addPokemonToParty( new Charmander(40, ['bubble']) );
  // currentPlayer.addPokemonToParty( new Charmander(50, ['bubble']) );
  // currentPlayer.addPokemonToParty( new Charmander(60, ['bubble']) );
  // currentPlayer.addPokemonToParty( new Charmander(70, ['bubble']) );
  // currentPlayer.addPokemonToParty( new Charmander(80, ['bubble']) );

  // PRINT INFORMATION ON CURRENT PLAYER'S POKEMON
  //
  // for (var i = 0; i < currentPlayer.carriedPokemon.length; i+=1) {
  //   currentPlayer.carriedPokemon[i].calculateMaxHp();
  //   console.log(currentPlayer.carriedPokemon[i].baseHp +
  //     ' - lvl ' + currentPlayer.carriedPokemon[i].level +
  //     ' - hp ' + currentPlayer.carriedPokemon[i].maxHp);
  // }

  // currentPlayer.addPokemonToParty(new Charmander(25, [move['Ember']]));
  // currentPlayer.addPokemonToParty(new Squirtle(54, [move['Bubble']]));
  // currentPlayer.addPokemonToParty(new Bulbasaur(33, [move['Tail Whip']]));

// }());
